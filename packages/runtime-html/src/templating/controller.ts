/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import {
  IContainer,
  IIndexable,
  nextId,
  Writable,
  Constructable,
  IDisposable,
  isObject,
  ILogger,
  LogLevel,
  resolveAll,
  Metadata,
  DI,
} from '@aurelia/kernel';
import {
  IBinding,
  Scope,
  LifecycleFlags,
  ILifecycle,
  IBindingTargetAccessor,
  PropertyBinding,
  BindableObserver,
  BindableDefinition,
} from '@aurelia/runtime';
import { convertToRenderLocation, INode, INodeSequence, IRenderLocation } from '../dom';
import { CustomElementDefinition, CustomElement, PartialCustomElementDefinition } from '../resources/custom-element';
import { CustomAttributeDefinition, CustomAttribute } from '../resources/custom-attribute';
import { IRenderContext, getRenderContext, RenderContext, ICompiledRenderContext } from './render-context';
import { ChildrenObserver } from './children';
import { IAppRoot } from '../app-root';
import { IPlatform } from '../platform';
import { IShadowDOMGlobalStyles, IShadowDOMStyles } from './styles';
import type { RegisteredProjections } from '../resources/custom-elements/au-slot';
import type { IViewFactory } from './view';
import type { Instruction } from '../renderer';

function callDispose(disposable: IDisposable): void {
  disposable.dispose();
}

type BindingContext<C extends IViewModel> = Required<ICompileHooks> & Required<IActivationHooks<IHydratedParentController | null>> & C;

export const enum MountTarget {
  none = 0,
  host = 1,
  shadowRoot = 2,
  location = 3,
}

const controllerLookup: WeakMap<object, Controller> = new WeakMap();
export class Controller<C extends IViewModel = IViewModel> implements IController<C> {
  public readonly id: number = nextId('au$component');

  public head: IHydratedController | null = null;
  public tail: IHydratedController | null = null;
  public next: IHydratedController | null = null;

  public parent: Controller | null = null;
  public bindings: IBinding[] | null = null;
  public children: Controller[] | null = null;

  public hasLockedScope: boolean = false;

  public isStrictBinding: boolean = false;

  public scope: Scope | null = null;
  public hostScope: Scope | null = null;

  public mountTarget: MountTarget = MountTarget.none;
  public shadowRoot: ShadowRoot | null = null;
  public nodes: INodeSequence | null = null;
  public context: RenderContext | null = null;
  public location: IRenderLocation | null = null;

  public state: State = State.none;
  public get isActive(): boolean {
    return (this.state & (State.activating | State.activated)) > 0 && (this.state & State.deactivating) === 0;
  }

  private get name(): string {
    let parentName = this.parent?.name ?? '';
    parentName = parentName.length > 0 ? `${parentName} -> ` : '';
    switch (this.vmKind) {
      case ViewModelKind.customAttribute:
        return `${parentName}Attribute<${this.viewModel?.constructor.name}>`;
      case ViewModelKind.customElement:
        return `${parentName}Element<${this.viewModel?.constructor.name}>`;
      case ViewModelKind.synthetic:
        return `${parentName}View<${this.viewFactory?.name}>`;
    }
  }

  private logger: ILogger | null = null;
  private debug: boolean = false;
  private fullyNamed: boolean = false;

  public readonly platform: IPlatform;
  public readonly lifecycle: ILifecycle;
  public readonly hooks: HooksDefinition;

  public constructor(
    public root: IAppRoot | null,
    public container: IContainer,
    public readonly vmKind: ViewModelKind,
    public flags: LifecycleFlags,
    public readonly definition: CustomElementDefinition | CustomAttributeDefinition | null,
    /**
     * The viewFactory. Only present for synthetic views.
     */
    public viewFactory: IViewFactory | null,
    /**
     * The backing viewModel. Only present for custom attributes and elements.
     */
    public viewModel: BindingContext<C> | null,
    /**
     * The physical host dom node.
     *
     * For containerless elements, this node will be removed from the DOM and replaced by a comment, which is assigned to the `location` property.
     *
     * For ShadowDOM elements, this will be the original declaring element, NOT the shadow root (the shadow root is stored on the `shadowRoot` property)
     */
    public host: HTMLElement | null,
  ) {
    if (root === null && container.has(IAppRoot, true)) {
      this.root = container.get<IAppRoot>(IAppRoot);
    }
    this.platform = container.get(IPlatform);
    this.lifecycle = container.get(ILifecycle);
    switch (vmKind) {
      case ViewModelKind.customAttribute:
      case ViewModelKind.customElement:
        this.hooks = new HooksDefinition(viewModel!);
        break;
      case ViewModelKind.synthetic:
        this.hooks = HooksDefinition.none;
        break;
    }
  }

  public static getCached<C extends ICustomElementViewModel = ICustomElementViewModel>(viewModel: C): ICustomElementController<C> | undefined {
    return controllerLookup.get(viewModel) as ICustomElementController<C> | undefined;
  }

  public static getCachedOrThrow<C extends ICustomElementViewModel = ICustomElementViewModel>(viewModel: C): ICustomElementController<C> {
    const controller = Controller.getCached(viewModel);
    if (controller === void 0) {
      throw new Error(`There is no cached controller for the provided ViewModel: ${String(viewModel)}`);
    }
    return controller as ICustomElementController<C>;
  }

  public static forCustomElement<C extends ICustomElementViewModel = ICustomElementViewModel>(
    root: IAppRoot | null,
    container: IContainer,
    viewModel: C,
    host: HTMLElement,
    // projections *targeted* for this custom element. these are not the projections *provided* by this custom element.
    targetedProjections: RegisteredProjections | null,
    flags: LifecycleFlags = LifecycleFlags.none,
    hydrate: boolean = true,
    // Use this when `instance.constructor` is not a custom element type to pass on the CustomElement definition
    definition: CustomElementDefinition | undefined = void 0,
  ): ICustomElementController<C> {
    if (controllerLookup.has(viewModel)) {
      return controllerLookup.get(viewModel) as unknown as ICustomElementController<C>;
    }

    definition = definition ?? CustomElement.getDefinition(viewModel.constructor as Constructable);

    const controller = new Controller<C>(
      /* root           */root,
      /* container      */container,
      /* vmKind         */ViewModelKind.customElement,
      /* flags          */flags,
      /* definition     */definition,
      /* viewFactory    */null,
      /* viewModel      */viewModel as BindingContext<C>,
      /* host           */host,
    );

    controllerLookup.set(viewModel, controller as Controller);

    if (hydrate) {
      controller.hydrateCustomElement(container, targetedProjections);
    }

    return controller as unknown as ICustomElementController<C>;
  }

  public static forCustomAttribute<C extends ICustomAttributeViewModel = ICustomAttributeViewModel>(
    root: IAppRoot | null,
    container: IContainer,
    viewModel: C,
    host: HTMLElement,
    flags: LifecycleFlags = LifecycleFlags.none,
  ): ICustomAttributeController<C> {
    if (controllerLookup.has(viewModel)) {
      return controllerLookup.get(viewModel) as unknown as ICustomAttributeController<C>;
    }

    const definition = CustomAttribute.getDefinition(viewModel.constructor as Constructable);

    const controller = new Controller<C>(
      /* root           */root,
      /* container      */container,
      /* vmKind         */ViewModelKind.customAttribute,
      /* flags          */flags,
      /* definition     */definition,
      /* viewFactory    */null,
      /* viewModel      */viewModel as BindingContext<C>,
      /* host           */host
    );

    controllerLookup.set(viewModel, controller as Controller);

    controller.hydrateCustomAttribute();

    return controller as unknown as ICustomAttributeController<C>;
  }

  public static forSyntheticView(
    root: IAppRoot | null,
    context: IRenderContext,
    viewFactory: IViewFactory,
    flags: LifecycleFlags = LifecycleFlags.none,
    parentController: ISyntheticView | ICustomElementController | ICustomAttributeController | undefined = void 0,
  ): ISyntheticView {
    const controller = new Controller(
      /* root           */root,
      /* container      */context,
      /* vmKind         */ViewModelKind.synthetic,
      /* flags          */flags,
      /* definition     */null,
      /* viewFactory    */viewFactory,
      /* viewModel      */null,
      /* host           */null,
    );
    // deepscan-disable-next-line
    controller.parent = parentController as Controller ?? null;

    controller.hydrateSynthetic(context);

    return controller as unknown as ISyntheticView;
  }

  /** @internal */
  public hydrateCustomElement(parentContainer: IContainer, targetedProjections: RegisteredProjections | null): void {
    this.logger = parentContainer.get(ILogger).root;
    this.debug = this.logger.config.level <= LogLevel.debug;
    if (this.debug) {
      this.logger = this.logger.scopeTo(this.name);
    }

    let definition = this.definition as CustomElementDefinition;
    const flags = this.flags;
    const instance = this.viewModel as BindingContext<C>;
    createObservers(this.lifecycle, definition, flags, instance);
    createChildrenObservers(this as Controller, definition, flags, instance);

    this.scope = Scope.create(flags, this.viewModel!, null, true);

    const hooks = this.hooks;
    if (hooks.hasDefine) {
      if (this.debug) { this.logger.trace(`invoking define() hook`); }
      const result = instance.define(
        /* controller      */this as ICustomElementController,
        /* parentContainer */parentContainer,
        /* definition      */definition,
      );
      if (result !== void 0 && result !== definition) {
        definition = CustomElementDefinition.getOrCreate(result);
      }
    }

    const context = this.context = getRenderContext(definition, parentContainer, targetedProjections?.projections) as RenderContext;
    // Support Recursive Components by adding self to own context
    definition.register(context);
    if (definition.injectable !== null) {
      // If the element is registered as injectable, support injecting the instance into children
      context.beginChildComponentOperation(instance as ICustomElementViewModel);
    }

    // If this is the root controller, then the AppRoot will invoke things in the following order:
    // - Controller.hydrateCustomElement
    // - runAppTasks('hydrating') // may return a promise
    // - Controller.compile
    // - runAppTasks('hydrated') // may return a promise
    // - Controller.compileChildren
    // This keeps hydration synchronous while still allowing the composition root compile hooks to do async work.
    if ((this.root?.controller as this | undefined) !== this) {
      this.hydrate(targetedProjections);
      this.hydrateChildren();
    }
  }

  /** @internal */
  public hydrate(targetedProjections: RegisteredProjections | null): void {
    if (this.hooks.hasHydrating) {
      if (this.debug) { this.logger!.trace(`invoking hasHydrating() hook`); }
      (this.viewModel as BindingContext<C>).hydrating(this as ICustomElementController);
    }

    const compiledContext = this.context!.compile(targetedProjections);
    const { projectionsMap, shadowOptions, isStrictBinding, hasSlots, containerless } = compiledContext.compiledDefinition;

    compiledContext.registerProjections(projectionsMap, this.scope!);
    // once the projections are registered, we can cleanup the projection map to prevent memory leaks.
    projectionsMap.clear();
    this.isStrictBinding = isStrictBinding;

    if (shadowOptions !== null || hasSlots) {
      if (containerless) { throw new Error('You cannot combine the containerless custom element option with Shadow DOM.'); }
      Metadata.define(CustomElement.name, this, this.host);
      this.setShadowRoot(this.shadowRoot = (this.host as HTMLElement).attachShadow(shadowOptions ?? defaultShadowOptions));
    } else if (containerless) {
      this.setLocation(this.location = convertToRenderLocation(this.host!));
    } else {
      this.setHost(this.host!);
    }

    (this.viewModel as Writable<C>).$controller = this;
    this.nodes = compiledContext.createNodes();

    if (this.hooks.hasHydrated) {
      if (this.debug) { this.logger!.trace(`invoking hasHydrated() hook`); }
      (this.viewModel as BindingContext<C>).hydrated(this as ICustomElementController);
    }
  }

  /** @internal */
  public hydrateChildren(): void {
    const targets = this.nodes!.findTargets();
    this.context!.render(
      /* flags      */this.flags,
      /* controller */this as ICustomElementController,
      /* targets    */targets,
      /* definition */this.context!.compiledDefinition,
      /* host       */this.host,
    );

    if (this.hooks.hasCreated) {
      if (this.debug) { this.logger!.trace(`invoking created() hook`); }
      (this.viewModel as BindingContext<C>).created(this as ICustomElementController);
    }
  }

  private hydrateCustomAttribute(): void {
    const definition = this.definition as CustomElementDefinition;
    const instance = this.viewModel!;
    createObservers(this.lifecycle, definition, this.flags, instance);

    (instance as Writable<C>).$controller = this;
  }

  private hydrateSynthetic(context: IRenderContext): void {
    this.context = context as RenderContext;
    const compiledContext = context.compile(null);
    const compiledDefinition = compiledContext.compiledDefinition;

    this.isStrictBinding = compiledDefinition.isStrictBinding;

    const nodes = this.nodes = compiledContext.createNodes();
    const targets = nodes.findTargets();
    compiledContext.render(
      /* flags      */this.flags,
      /* controller */this,
      /* targets    */targets,
      /* definition */compiledDefinition,
      /* host       */void 0,
    );
  }

  private $initiator: Controller = null!;
  private $flags: LifecycleFlags = LifecycleFlags.none;
  public activate(
    initiator: Controller,
    parent: Controller | null,
    flags: LifecycleFlags,
    scope?: Scope | null,
    hostScope?: Scope | null,
  ): void | Promise<void> {
    switch (this.state) {
      case State.none:
      case State.deactivated:
        if (!(parent === null || parent.isActive)) {
          // If this is not the root, and the parent is either:
          // 1. Not activated, or activating children OR
          // 2. Deactivating itself
          // abort.
          return;
        }
        // Otherwise, proceed normally.
        // 'deactivated' and 'none' are treated the same because, from an activation perspective, they mean the same thing.
        this.state = State.activating;
        break;
      case State.activated:
        // If we're already activated, no need to do anything.
        return;
      case State.disposed:
        throw new Error(`${this.name} trying to activate a controller that is disposed.`);
      default:
        throw new Error(`${this.name} unexpected state: ${stringifyState(this.state)}.`);
    }

    this.parent = parent;
    if (this.debug && !this.fullyNamed) {
      this.fullyNamed = true;
      this.logger = this.context!.get(ILogger).root.scopeTo(this.name);
      this.logger!.trace(`activate()`);
    }
    this.hostScope = hostScope ?? null;
    flags |= LifecycleFlags.fromBind;

    switch (this.vmKind) {
      case ViewModelKind.customElement:
        // Custom element scope is created and assigned during hydration
        (this.scope as Writable<Scope>).parentScope = scope ?? null;
        break;
      case ViewModelKind.customAttribute:
        this.scope = scope ?? null;
        break;
      case ViewModelKind.synthetic:
        if (scope === void 0 || scope === null) {
          throw new Error(`Scope is null or undefined`);
        }

        if (!this.hasLockedScope) {
          this.scope = scope;
        }
        break;
    }

    if (this.isStrictBinding) {
      flags |= LifecycleFlags.isStrictBindingStrategy;
    }

    this.$initiator = initiator;
    this.$flags = flags;

    if (this.hooks.hasBinding) {
      if (this.debug) { this.logger!.trace(`binding()`); }

      const ret = this.viewModel!.binding(this.$initiator as IHydratedController, this.parent as IHydratedParentController, this.$flags);
      if (ret instanceof Promise) {
        return ret.then(this.bind.bind(this));
      }
    }

    return this.bind();
  }

  private bind(): void | Promise<void> {
    if (this.debug) { this.logger!.trace(`bind()`); }

    if (this.bindings !== null) {
      for (let i = 0; i < this.bindings.length; ++i) {
        this.bindings[i].$bind(this.$flags, this.scope!, this.hostScope);
      }
    }

    if (this.hooks.hasBound) {
      if (this.debug) { this.logger!.trace(`bound()`); }

      const ret = this.viewModel!.bound(this.$initiator as IHydratedController, this.parent as IHydratedParentController, this.$flags);
      if (ret instanceof Promise) {
        return ret.then(this.attach.bind(this));
      }
    }

    return this.attach();
  }

  private attach(): void | Promise<void> {
    if (this.debug) { this.logger!.trace(`attach()`); }

    switch (this.mountTarget) {
      case MountTarget.host:
        this.nodes!.appendTo(this.host!, (this.definition as CustomElementDefinition | null)?.enhance);
        break;
      case MountTarget.shadowRoot: {
        const styles = this.context!.has(IShadowDOMStyles, false)
          ? this.context!.get(IShadowDOMStyles)
          : this.context!.get(IShadowDOMGlobalStyles);
        styles.applyTo(this.shadowRoot!);
        this.nodes!.appendTo(this.shadowRoot!);
        break;
      }
      case MountTarget.location:
        this.nodes!.insertBefore(this.location!);
        break;
    }

    let ret: Promise<void> | void = void 0;
    let promises: Promise<void>[] | undefined = void 0;
    if (this.hooks.hasAttaching) {
      if (this.debug) { this.logger!.trace(`attaching()`); }

      ret = this.viewModel!.attaching(this.$initiator as IHydratedController, this.parent as IHydratedParentController, this.$flags);
      if (ret instanceof Promise) {
        promises = [ret];
      }
    }
    if (this.children !== null) {
      for (let i = 0; i < this.children.length; ++i) {
        ret = this.children[i].activate(this.$initiator, this as Controller, this.$flags, this.scope, this.hostScope);
        if (ret instanceof Promise) {
          (promises ??= []).push(ret);
        }
      }
    }

    ret = promises === void 0 ? void 0 : resolveAll(...promises);
    if (ret instanceof Promise) {
      return ret.then(this.attached.bind(this));
    }
    return this.attached();
  }

  private attached(): void | Promise<void> {
    this.state = State.activated;

    if (this.hooks.hasAttached) {
      if (this.debug) { this.logger!.trace(`attached()`); }

      return this.viewModel!.attached!(this.$initiator as IHydratedController, this.$flags);
    }
  }

  public deactivate(
    initiator: Controller,
    parent: Controller | null,
    flags: LifecycleFlags,
  ): void | Promise<void> {
    switch ((this.state & ~State.released)) {
      case State.activated:
        // We're fully activated, so proceed with normal deactivation.
        this.state = State.deactivating;
        break;
      case State.none:
      case State.deactivated:
      case State.disposed:
      case State.deactivated | State.disposed:
        // If we're already deactivated (or even disposed), or never activated in the first place, no need to do anything.
        return;
      default:
        throw new Error(`${this.name} unexpected state: ${stringifyState(this.state)}.`);
    }

    if (this.debug) { this.logger!.trace(`deactivate()`); }

    this.$initiator = initiator;
    this.$flags = flags;

    let promises: Promise<void>[] | undefined = void 0;
    let ret: Promise<void> | void = void 0;
    if (this.children !== null) {
      for (let i = 0; i < this.children.length; ++i) {
        ret = this.children[i].deactivate(initiator, this as Controller, flags);
        if (ret instanceof Promise) {
          (promises ??= []).push(ret);
        }
      }
    }

    if (this.hooks.hasDetaching) {
      if (this.debug) { this.logger!.trace(`detaching()`); }

      ret = this.viewModel!.detaching(this.$initiator as IHydratedController, this.parent as IHydratedParentController, this.$flags);
      if (ret instanceof Promise) {
        (promises ??= []).push(ret);
      }
    }

    // Note: if a 3rd party plugin happens to do any async stuff in a template controller before calling deactivate on its view,
    // then the linking will become out of order.
    // For framework components, this shouldn't cause issues.
    // We can only prevent that by linking up after awaiting the detaching promise, which would add an extra tick + a fair bit of
    // overhead on this hot path, so it's (for now) a deliberate choice to not account for such situation.
    // Just leaving the note here so that we know to look here if a weird detaching-related timing issue is ever reported.
    if (initiator.head === null) {
      initiator.head = this as IHydratedController;
    } else {
      initiator.tail!.next = this as IHydratedController;
    }
    initiator.tail = this as IHydratedController;

    ret = promises === void 0 ? void 0 : resolveAll(...promises);

    if (initiator !== this) {
      // Only detaching is called + the linked list is built when any controller that is not the initiator, is deactivated.
      // The rest is handled by the initiator.
      // This means that descendant controllers have to make sure to await the initiator's promise before doing any subsequent
      // controller api calls, or race conditions might occur.
      return ret;
    }

    if (ret instanceof Promise) {
      return ret.then(this.detach.bind(this));
    }

    return this.detach();
  }

  private detach(): void | Promise<void> {
    if (this.debug) { this.logger!.trace(`detach()`); }

    switch (this.vmKind) {
      case ViewModelKind.customElement:
      case ViewModelKind.synthetic:
        this.nodes!.remove();
        this.nodes!.unlink();
    }

    let promises: Promise<void>[] | undefined = void 0;
    let ret: Promise<void> | void = void 0;
    let cur = this.$initiator.head as Controller | null;
    let next: Controller | null = null;
    while (cur !== null) {
      if (cur !== this) {
        if (cur.debug) { cur.logger!.trace(`detach()`); }

        switch (cur.vmKind) {
          case ViewModelKind.customElement:
          case ViewModelKind.synthetic:
            cur.nodes!.remove();
            cur.nodes!.unlink();
        }
      }
      ret = cur.unbinding();
      if (ret instanceof Promise) {
        (promises ??= []).push(ret);
      }
      next = cur.next as Controller;
      cur.next = null;
      cur = next;
    }

    this.head = this.tail = null;

    if (promises !== void 0) {
      return resolveAll(...promises);
    }
  }

  private unbinding(): void | Promise<void> {
    if (this.hooks.hasUnbinding) {
      if (this.debug) { this.logger!.trace(`unbinding()`); }

      const ret = this.viewModel!.unbinding(this.$initiator as IHydratedController, this.parent as IHydratedParentController, this.$flags);
      if (ret instanceof Promise) {
        return ret.then(this.unbind.bind(this));
      }
    }

    return this.unbind();
  }

  private unbind(): void {
    if (this.debug) { this.logger!.trace(`unbind()`); }

    const flags = this.$flags | LifecycleFlags.fromUnbind;

    if (this.bindings !== null) {
      for (let i = 0; i < this.bindings.length; ++i) {
        this.bindings[i].$unbind(flags);
      }
    }

    this.parent = null;

    switch (this.vmKind) {
      case ViewModelKind.customAttribute:
        this.scope = null;
        break;
      case ViewModelKind.synthetic:
        if (!this.hasLockedScope) {
          this.scope = null;
        }

        if (
          (this.state & State.released) === State.released &&
          !this.viewFactory!.tryReturnToCache(this as ISyntheticView)
        ) {
          this.dispose();
        }
        break;
      case ViewModelKind.customElement:
        (this.scope as Writable<Scope>).parentScope = null;
        break;
    }

    if ((flags & LifecycleFlags.dispose) === LifecycleFlags.dispose) {
      this.dispose();
    }
    this.state = (this.state & State.disposed) | State.deactivated;
  }

  public addBinding(binding: IBinding): void {
    if (this.bindings === null) {
      this.bindings = [binding];
    } else {
      this.bindings[this.bindings.length] = binding;
    }
  }

  public addController(controller: Controller): void {
    if (this.children === null) {
      this.children = [controller];
    } else {
      this.children[this.children.length] = controller;
    }
  }

  public is(name: string): boolean {
    switch (this.vmKind) {
      case ViewModelKind.customAttribute: {
        const def = CustomAttribute.getDefinition(this.viewModel!.constructor as Constructable);
        return def.name === name;
      }
      case ViewModelKind.customElement: {
        const def = CustomElement.getDefinition(this.viewModel!.constructor as Constructable);
        return def.name === name;
      }
      case ViewModelKind.synthetic:
        return this.viewFactory!.name === name;
    }
  }

  public lockScope(scope: Writable<Scope>): void {
    this.scope = scope;
    this.hasLockedScope = true;
  }

  public setHost(host: HTMLElement): this {
    if (this.vmKind === ViewModelKind.customElement) { Metadata.define(CustomElement.name, this, host); }
    this.host = host;
    this.mountTarget = MountTarget.host;
    return this;
  }

  public setShadowRoot(shadowRoot: ShadowRoot): this {
    if (this.vmKind === ViewModelKind.customElement) { Metadata.define(CustomElement.name, this, shadowRoot); }
    this.shadowRoot = shadowRoot;
    this.mountTarget = MountTarget.shadowRoot;
    return this;
  }

  public setLocation(location: IRenderLocation): this {
    if (this.vmKind === ViewModelKind.customElement) { Metadata.define(CustomElement.name, this, location); }
    this.location = location;
    this.mountTarget = MountTarget.location;
    return this;
  }

  public release(): void {
    this.state |= State.released;
  }

  public dispose(): void {
    if (this.debug) { this.logger!.trace(`dispose()`); }

    if ((this.state & State.disposed) === State.disposed) {
      return;
    }
    this.state |= State.disposed;

    if (this.hooks.hasDispose) {
      this.viewModel!.dispose();
    }

    if (this.children !== null) {
      this.children.forEach(callDispose);
      this.children = null;
    }

    this.scope = null;

    this.nodes = null;
    this.context = null;
    this.location = null;

    this.viewFactory = null;
    if (this.viewModel !== null) {
      controllerLookup.delete(this.viewModel);
      this.viewModel = null;
    }
    this.viewModel = null;
    this.host = null;
    this.shadowRoot = null;
    this.root = null;
  }

  public accept(visitor: ControllerVisitor): void | true {
    if (visitor(this as IHydratedController) === true) {
      return true;
    }

    if (this.hooks.hasAccept && this.viewModel!.accept(visitor) === true) {
      return true;
    }

    if (this.children !== null) {
      const { children } = this;
      for (let i = 0, ii = children.length; i < ii; ++i) {
        if (children[i].accept(visitor) === true) {
          return true;
        }
      }
    }
  }

  public getTargetAccessor(propertyName: string): IBindingTargetAccessor | undefined {
    const { bindings } = this;
    if (bindings !== null) {
      const binding = bindings.find(b => (b as PropertyBinding).targetProperty === propertyName) as PropertyBinding;
      if (binding !== void 0) {
        return binding.targetObserver;
      }
    }
    return void 0;
  }
}

function getLookup(instance: IIndexable): Record<string, BindableObserver | ChildrenObserver> {
  let lookup = instance.$observers;
  if (lookup === void 0) {
    Reflect.defineProperty(
      instance,
      '$observers',
      {
        enumerable: false,
        value: lookup = {},
      },
    );
  }
  return lookup as Record<string, BindableObserver | ChildrenObserver>;
}

function createObservers(
  lifecycle: ILifecycle,
  definition: CustomElementDefinition | CustomAttributeDefinition,
  flags: LifecycleFlags,
  instance: object,
): void {
  const bindables = definition.bindables;
  const observableNames = Object.getOwnPropertyNames(bindables);
  const length = observableNames.length;
  if (length > 0) {
    let name: string;
    let bindable: BindableDefinition;
    const observers = getLookup(instance as IIndexable);

    for (let i = 0; i < length; ++i) {
      name = observableNames[i];

      if (observers[name] === void 0) {
        bindable = bindables[name];

        observers[name] = new BindableObserver(
          lifecycle,
          flags,
          instance as IIndexable,
          name,
          bindable.callback,
          bindable.set,
        );
      }
    }
  }
}

function createChildrenObservers(
  controller: Controller,
  definition: CustomElementDefinition,
  flags: LifecycleFlags,
  instance: object,
): void {
  const childrenObservers = definition.childrenObservers;
  const childObserverNames = Object.getOwnPropertyNames(childrenObservers);
  const length = childObserverNames.length;
  if (length > 0) {
    const observers = getLookup(instance as IIndexable);

    let name: string;
    for (let i = 0; i < length; ++i) {
      name = childObserverNames[i];

      if (observers[name] == void 0) {
        const childrenDescription = childrenObservers[name];
        observers[name] = new ChildrenObserver(
          controller as ICustomElementController,
          instance as IIndexable,
          flags,
          name,
          childrenDescription.callback,
          childrenDescription.query,
          childrenDescription.filter,
          childrenDescription.map,
          childrenDescription.options,
        );
      }
    }
  }
}

export function isCustomElementController<C extends ICustomElementViewModel = ICustomElementViewModel>(value: unknown): value is ICustomElementController<C> {
  return value instanceof Controller && value.vmKind === ViewModelKind.customElement;
}

export function isCustomElementViewModel(value: unknown): value is ICustomElementViewModel {
  return isObject(value) && CustomElement.isType(value.constructor);
}

export class HooksDefinition {
  public static readonly none: Readonly<HooksDefinition> = new HooksDefinition({});

  public readonly hasDefine: boolean;

  public readonly hasHydrating: boolean;
  public readonly hasHydrated: boolean;
  public readonly hasCreated: boolean;

  public readonly hasBinding: boolean;
  public readonly hasBound: boolean;
  public readonly hasAttaching: boolean;
  public readonly hasAttached: boolean;

  public readonly hasDetaching: boolean;
  public readonly hasUnbinding: boolean;

  public readonly hasDispose: boolean;
  public readonly hasAccept: boolean;

  public constructor(target: object) {
    this.hasDefine = 'define' in target;

    this.hasHydrating = 'hydrating' in target;
    this.hasHydrated = 'hydrated' in target;
    this.hasCreated = 'created' in target;

    this.hasBinding = 'binding' in target;
    this.hasBound = 'bound' in target;
    this.hasAttaching = 'attaching' in target;
    this.hasAttached = 'attached' in target;

    this.hasDetaching = 'detaching' in target;
    this.hasUnbinding = 'unbinding' in target;

    this.hasDispose = 'dispose' in target;
    this.hasAccept = 'accept' in target;
  }
}

const defaultShadowOptions = {
  mode: 'open' as 'open' | 'closed'
};

export const enum ViewModelKind {
  customElement,
  customAttribute,
  synthetic
}

/**
 * A controller that is ready for activation. It can be `ISyntheticView`, `ICustomElementController` or `ICustomAttributeController`.
 *
 * In terms of specificity this is identical to `IController`. The only difference is that this
 * type is further initialized and thus has more properties and APIs available.
 */
export type IHydratedController = ISyntheticView | ICustomElementController | ICustomAttributeController;
/**
 * A controller that is ready for activation. It can be `ICustomElementController` or `ICustomAttributeController`.
 *
 * This type of controller is backed by a real component (hence the name) and therefore has ViewModel and may have lifecycle hooks.
 *
 * In contrast, `ISyntheticView` has neither a view model nor lifecycle hooks (but its child controllers, if any, may).
 */
export type IHydratedComponentController = ICustomElementController | ICustomAttributeController;
/**
 * A controller that is ready for activation. It can be `ISyntheticView` or `ICustomElementController`.
 *
 * This type of controller may have child controllers (hence the name) and bindings directly placed on it during hydration.
 *
 * In contrast, `ICustomAttributeController` has neither child controllers nor bindings directly placed on it (but the backing component may).
 *
 * Note: the parent of a `ISyntheticView` is always a `IHydratedComponentController` because views cannot directly own other views. Views may own components, and components may own views or components.
 */
export type IHydratedParentController = ISyntheticView | ICustomElementController;

/**
 * A callback that is invoked on each controller in the component tree.
 *
 * Return `true` to stop traversal.
 */
export type ControllerVisitor = (controller: IHydratedController) => void | true;

/**
 * The base type for all controller types.
 *
 * Every controller, regardless of their type and state, will have at least the properties/methods in this interface.
 */
export interface IController<C extends IViewModel = IViewModel> extends IDisposable {
  /** @internal */readonly id: number;
  readonly platform: IPlatform;
  readonly root: IAppRoot | null;
  readonly flags: LifecycleFlags;
  readonly lifecycle: ILifecycle;
  readonly vmKind: ViewModelKind;
  readonly definition: CustomElementDefinition | CustomAttributeDefinition | null;
  readonly host: HTMLElement | null;
  readonly state: State;
  readonly isActive: boolean;

  /** @internal */head: IHydratedController | null;
  /** @internal */tail: IHydratedController | null;
  /** @internal */next: IHydratedController | null;

  /**
   * Return `true` to stop traversal.
   */
  accept(visitor: ControllerVisitor): void | true;
}

/**
 * The base type for `ICustomAttributeController` and `ICustomElementController`.
 *
 * Both of those types have the `viewModel` property which represent the user instance containing the bound properties and hooks for this component.
 */
export interface IComponentController<C extends IViewModel = IViewModel> extends IController<C> {
  readonly vmKind: ViewModelKind.customAttribute | ViewModelKind.customElement;
  readonly definition: CustomElementDefinition | CustomAttributeDefinition;

  /**
   * The user instance containing the bound properties. This is always an instance of a class, which may either be user-defined, or generated by a view locator.
   */
  readonly viewModel: C;

}

/**
 * The base type for `ISyntheticView` and `ICustomElementController`.
 *
 * Both of those types can:
 * - Have `bindings` and `children` which are populated during hydration (hence, 'Hydratable').
 * - Have physical DOM nodes that can be mounted.
 */
export interface IHydratableController<C extends IViewModel = IViewModel> extends IController<C> {
  readonly vmKind: ViewModelKind.customElement | ViewModelKind.synthetic;
  readonly mountTarget: MountTarget;
  readonly definition: CustomElementDefinition | null;

  readonly bindings: readonly IBinding[] | null;
  readonly children: readonly IHydratedController[] | null;

  getTargetAccessor(propertyName: string): IBindingTargetAccessor | null;

  addBinding(binding: IBinding): void;
  addController(controller: IController): void;
}

export const enum State {
  none                     = 0b00_00_00,
  activating               = 0b00_00_01,
  activated                = 0b00_00_10,
  deactivating             = 0b00_01_00,
  deactivated              = 0b00_10_00,
  released                 = 0b01_00_00,
  disposed                 = 0b10_00_00,
}

export function stringifyState(state: State): string {
  const names: string[] = [];

  if ((state & State.activating) === State.activating) { names.push('activating'); }
  if ((state & State.activated) === State.activated) { names.push('activated'); }
  if ((state & State.deactivating) === State.deactivating) { names.push('deactivating'); }
  if ((state & State.deactivated) === State.deactivated) { names.push('deactivated'); }
  if ((state & State.released) === State.released) { names.push('released'); }
  if ((state & State.disposed) === State.disposed) { names.push('disposed'); }

  return names.length === 0 ? 'none' : names.join('|');
}

/**
 * The controller for a synthetic view, that is, a controller created by an `IViewFactory`.
 *
 * A synthetic view, typically created when composing a template controller (`if`, `repeat`, etc), is a hydratable component with mountable DOM nodes that has no user view model.
 *
 * It has either its own synthetic binding context or is locked to some externally sourced scope (in the case of `au-compose`)
 */
export interface ISyntheticView extends IHydratableController {
  parent: IHydratedComponentController | null;

  readonly vmKind: ViewModelKind.synthetic;
  readonly definition: null;
  readonly viewModel: null;
  hostScope: Scope | null;
  /**
   * The compiled render context used for composing this view. Compilation was done by the `IViewFactory` prior to creating this view.
   */
  readonly context: ICompiledRenderContext;
  readonly isStrictBinding: boolean;
  /**
   * The physical DOM nodes that will be appended during the attach operation.
   */
  readonly nodes: INodeSequence;

  activate(
    initiator: IHydratedController,
    parent: IHydratedComponentController,
    flags: LifecycleFlags,
    scope: Scope,
    hostScope?: Scope | null,
  ): void | Promise<void>;
  deactivate(
    initiator: IHydratedController,
    parent: IHydratedComponentController,
    flags: LifecycleFlags,
  ): void | Promise<void>;

  /**
   * Lock this view's scope to the provided `Scope`. The scope, which is normally set during `activate()`, will then not change anymore.
   *
   * This is used by `au-compose` to set the binding context of a view to a particular component instance.
   *
   * @param scope - The scope to lock this view to.
   */
  lockScope(scope: Scope): void;
  /**
   * The scope that belongs to this view. This property will always be defined when the `state` property of this view indicates that the view is currently bound.
   *
   * The `scope` may be set during `activate()` and unset during `deactivate()`, or it may be statically set during composing with `lockScope()`.
   */
  readonly scope: Scope;

  /**
   * Set the render location that this view will be inserted before.
   */
  setLocation(location: IRenderLocation): this;
  /**
   * The DOM node that this view will be inserted before (if set).
   */
  readonly location: IRenderLocation | null;

  /**
   * Set the host that this view will be appended to.
   */
  setHost(host: Node & ParentNode): this;
  /**
   * The DOM node that this view will be appended to (if set).
   */
  readonly host: HTMLElement | null;

  /**
   * Set the `ShadowRoot` that this view will be appended to.
   */
  setShadowRoot(shadowRoot: ShadowRoot): this;
  /**
   * The ShadowRoot that this view will be appended to (if set).
   */
  readonly shadowRoot: ShadowRoot | null;

  /**
   * Mark this view as not-in-use, so that it can either be disposed or returned to cache after finishing the deactivate lifecycle.
   *
   * If this view is cached and later retrieved from the cache, it will be marked as in-use again before starting the activate lifecycle, so this method must be called each time.
   *
   * If this method is *not* called before `deactivate()`, this view will neither be cached nor disposed.
   */
  release(): void;
}

export interface ICustomAttributeController<C extends ICustomAttributeViewModel = ICustomAttributeViewModel> extends IComponentController<C> {
  parent: IHydratedParentController | null;

  readonly vmKind: ViewModelKind.customAttribute;
  readonly definition: CustomAttributeDefinition;
  /**
   * @inheritdoc
   */
  readonly viewModel: C;
  /**
   * The scope that belongs to this custom attribute. This property will always be defined when the `state` property of this view indicates that the view is currently bound.
   *
   * The `scope` will be set during `activate()` and unset during `deactivate()`.
   *
   * The scope's `bindingContext` will be the same instance as this controller's `viewModel` property.
   */
  readonly scope: Scope;
  hostScope: Scope | null;
  readonly children: null;
  readonly bindings: null;

  activate(
    initiator: IHydratedController,
    parent: IHydratedParentController,
    flags: LifecycleFlags,
    scope: Scope,
    hostScope?: Scope | null,
  ): void | Promise<void>;
  deactivate(
    initiator: IHydratedController,
    parent: IHydratedParentController,
    flags: LifecycleFlags,
  ): void | Promise<void>;
}

/**
 * A representation of `IController` specific to a custom element whose `create` hook is about to be invoked (if present).
 *
 * It is not yet hydrated (hence 'dry') with any render-specific information.
 */
export interface IDryCustomElementController<C extends IViewModel = IViewModel> extends IComponentController<C>, IHydratableController<C> {
  readonly vmKind: ViewModelKind.customElement;
  readonly definition: CustomElementDefinition;
  /**
   * The scope that belongs to this custom element. This property is set immediately after the controller is created and is always guaranteed to be available.
   *
   * It may be overwritten by end user during the `create()` hook.
   *
   * By default, the scope's `bindingContext` will be the same instance as this controller's `viewModel` property.
   */
  scope: Scope;
  hostScope: Scope | null;
  /**
   * The original host dom node.
   *
   * For containerless elements, this node will be removed from the DOM and replaced by a comment, which is assigned to the `location` property.
   *
   * For ShadowDOM elements, this will be the original declaring element, NOT the shadow root (the shadow root is stored on the `shadowRoot` property)
   */
  readonly host: HTMLElement;
}

/**
 * A representation of `IController` specific to a custom element whose `hydrating` hook is about to be invoked (if present).
 *
 * It has the same properties as `IDryCustomElementController`, as well as a render context (hence 'contextual').
 */
export interface IContextualCustomElementController<C extends IViewModel = IViewModel> extends IDryCustomElementController<C> {
  /**
   * The non-compiled render context used for compiling this component's `CustomElementDefinition`.
   */
  readonly context: IRenderContext;
}

/**
 * A representation of `IController` specific to a custom element whose `hydrated` hook is about to be invoked (if present).
 *
 * It has the same properties as `IContextualCustomElementController`, except the context is now compiled (hence 'compiled'), as well as the nodes, and projector.
 */
export interface ICompiledCustomElementController<C extends IViewModel = IViewModel> extends IContextualCustomElementController<C> {
  /**
   * The compiled render context used for hydrating this controller.
   */
  readonly context: ICompiledRenderContext;
  readonly isStrictBinding: boolean;
  /**
   * The ShadowRoot, if this custom element uses ShadowDOM.
   */
  readonly shadowRoot: ShadowRoot | null;
  /**
   * The renderLocation, if this is a `containerless` custom element.
   */
  readonly location: IRenderLocation | null;
  /**
   * The physical DOM nodes that will be appended during the `mount()` operation.
   */
  readonly nodes: INodeSequence;
}

/**
 * A fully hydrated custom element controller.
 */
export interface ICustomElementController<C extends ICustomElementViewModel = ICustomElementViewModel> extends ICompiledCustomElementController<C> {
  parent: IHydratedParentController | null;

  /**
   * @inheritdoc
   */
  readonly viewModel: C;

  activate(
    initiator: IHydratedController,
    parent: IHydratedParentController | null,
    flags: LifecycleFlags,
    scope?: Scope,
    hostScope?: Scope | null,
  ): void | Promise<void>;
  deactivate(
    initiator: IHydratedController,
    parent: IHydratedParentController | null,
    flags: LifecycleFlags,
  ): void | Promise<void>;
}

export const IController = DI.createInterface<IController>('IController').noDefault();

export interface IActivationHooks<TParent> {
  binding?(
    initiator: IHydratedController,
    parent: TParent,
    flags: LifecycleFlags,
  ): void | Promise<void>;
  bound?(
    initiator: IHydratedController,
    parent: TParent,
    flags: LifecycleFlags,
  ): void | Promise<void>;
  attaching?(
    initiator: IHydratedController,
    parent: TParent,
    flags: LifecycleFlags,
  ): void | Promise<void>;
  attached?(
    initiator: IHydratedController,
    flags: LifecycleFlags,
  ): void | Promise<void>;

  detaching?(
    initiator: IHydratedController,
    parent: TParent,
    flags: LifecycleFlags,
  ): void | Promise<void>;
  unbinding?(
    initiator: IHydratedController,
    parent: TParent,
    flags: LifecycleFlags,
  ): void | Promise<void>;

  dispose?(): void;
  /**
   * If this component controls the instantiation and lifecycles of one or more controllers,
   * implement this hook to enable component tree traversal for plugins that use it (such as the router).
   *
   * Return `true` to stop traversal.
   */
  accept?(visitor: ControllerVisitor): void | true;
}

export interface ICompileHooks {
  define?(
    controller: IDryCustomElementController<this>,
    parentContainer: IContainer,
    definition: CustomElementDefinition,
  ): PartialCustomElementDefinition | void;
  hydrating?(
    controller: IContextualCustomElementController<this>,
  ): void;
  hydrated?(
    controller: ICompiledCustomElementController<this>,
  ): void;
  created?(
    controller: ICustomElementController<this>,
  ): void;
}

/**
 * Defines optional lifecycle hooks that will be called only when they are implemented.
 */
export interface IViewModel {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor: Function;
  readonly $controller?: IController<this>;
}

export interface ICustomElementViewModel extends IViewModel, IActivationHooks<IHydratedParentController | null>, ICompileHooks {
  readonly $controller?: ICustomElementController<this>;
}

export interface ICustomAttributeViewModel extends IViewModel, IActivationHooks<IHydratedParentController> {
  readonly $controller?: ICustomAttributeController<this>;
  link?(
    flags: LifecycleFlags,
    parentContext: ICompiledRenderContext,
    controller: IHydratableController,
    childController: ICustomAttributeController,
    target: INode,
    instruction: Instruction,
  ): void;
}

export interface IHydratedCustomElementViewModel extends ICustomElementViewModel {
  readonly $controller: ICustomElementController<this>;
}

export interface IHydratedCustomAttributeViewModel extends ICustomAttributeViewModel {
  readonly $controller: ICustomAttributeController<this>;
}
