import { IServiceLocator } from '@aurelia/kernel';
import {
  AccessorOrObserver,
  BindingMode,
  connectable,
  ExpressionKind,
  IBindingTargetObserver,
  IConnectableBinding,
  ForOfStatement,
  IObserverLocator,
  IPartialConnectableBinding,
  IsBindingBehavior,
  LifecycleFlags,
  ITask,
  AccessorType,
  QueueTaskOptions,
} from '@aurelia/runtime';
import { AttributeObserver, IHtmlElement } from '../observation/element-attribute-observer';

import type { Scope } from '@aurelia/runtime';
import { IPlatform } from '../platform';
import { CustomElementDefinition } from '../resources/custom-element';
import { INode } from '../dom';

// BindingMode is not a const enum (and therefore not inlined), so assigning them to a variable to save a member accessor is a minor perf tweak
const { oneTime, toView, fromView } = BindingMode;

// pre-combining flags for bitwise checks is a minor perf tweak
const toViewOrOneTime = toView | oneTime;

const taskOptions: QueueTaskOptions = {
  reusable: false,
  preempt: true,
};

export interface AttributeBinding extends IConnectableBinding {}

/**
 * Attribute binding. Handle attribute binding betwen view/view model. Understand Html special attributes
 */
@connectable()
export class AttributeBinding implements IPartialConnectableBinding {
  public interceptor: this = this;

  public id!: number;
  public isBound: boolean = false;
  public $platform: IPlatform;
  public $scope: Scope = null!;
  public $hostScope: Scope | null = null;
  public projection?: CustomElementDefinition;
  public task: ITask | null = null;

  /**
   * Target key. In case Attr has inner structure, such as class -> classList, style -> CSSStyleDeclaration
   */

  public targetObserver!: AccessorOrObserver;

  public persistentFlags: LifecycleFlags = LifecycleFlags.none;

  public target: Element;
  public value: unknown;

  public constructor(
    public sourceExpression: IsBindingBehavior | ForOfStatement,
    target: INode,
    // some attributes may have inner structure
    // such as class -> collection of class names
    // such as style -> collection of style rules
    //
    // for normal attributes, targetAttribute and targetProperty are the same and can be ignore
    public targetAttribute: string,
    public targetProperty: string,
    public mode: BindingMode,
    public observerLocator: IObserverLocator,
    public locator: IServiceLocator,
  ) {
    this.target = target as Element;
    connectable.assignIdTo(this);
    this.$platform = locator.get(IPlatform);
  }

  public updateTarget(value: unknown, flags: LifecycleFlags): void {
    flags |= this.persistentFlags;
    this.targetObserver.setValue(value, flags | LifecycleFlags.updateTarget, this.target, this.targetProperty);
  }

  public updateSource(value: unknown, flags: LifecycleFlags): void {
    flags |= this.persistentFlags;
    this.sourceExpression.assign!(flags | LifecycleFlags.updateSource, this.$scope, this.$hostScope, this.locator, value);
  }

  public handleChange(newValue: unknown, _previousValue: unknown, flags: LifecycleFlags): void {
    if (!this.isBound) {
      return;
    }

    flags |= this.persistentFlags;

    const mode = this.mode;
    const interceptor = this.interceptor;
    const sourceExpression = this.sourceExpression;
    const $scope = this.$scope;
    const locator = this.locator;

    if (mode === BindingMode.fromView) {
      flags &= ~LifecycleFlags.updateTarget;
      flags |= LifecycleFlags.updateSource;
    }

    if (flags & LifecycleFlags.updateTarget) {
      const targetObserver = this.targetObserver;
      // Alpha: during bind a simple strategy for bind is always flush immediately
      // todo:
      //  (1). determine whether this should be the behavior
      //  (2). if not, then fix tests to reflect the changes/platform to properly yield all with aurelia.start()
      const shouldQueueFlush = (flags & LifecycleFlags.fromBind) === 0 && (targetObserver.type & AccessorType.Layout) > 0;
      // unlike property binding
      // attr binding read can be potentially expensive
      // so caching the read. Consider a way to force read configurably
      const oldValue = this.value;

      if (sourceExpression.$kind !== ExpressionKind.AccessScope || this.observerSlots > 1) {
        const shouldConnect = (mode & oneTime) === 0;
        if (shouldConnect) {
          this.version++;
        }
        newValue = sourceExpression.evaluate(flags, $scope, this.$hostScope, locator, interceptor);
        if (shouldConnect) {
          interceptor.unobserve(false);
        }
      }

      if (newValue !== oldValue) {
        this.value = newValue;
        if (shouldQueueFlush) {
          this.task?.cancel();
          this.task = this.$platform.domWriteQueue.queueTask(() => {
            if (this.isBound) {
              interceptor.updateTarget(newValue, flags);
            }
            this.task = null;
          }, taskOptions);
        } else {
          interceptor.updateTarget(newValue, flags);
        }
      }

      return;
    }

    if (flags & LifecycleFlags.updateSource) {
      if (newValue !== sourceExpression.evaluate(flags, $scope, this.$hostScope, locator, null)) {
        interceptor.updateSource(newValue, flags);
      }
      return;
    }

    throw new Error('Unexpected handleChange context in AttributeBinding');
  }

  public $bind(flags: LifecycleFlags, scope: Scope, hostScope: Scope | null, projection?: CustomElementDefinition): void {
    if (this.isBound) {
      if (this.$scope === scope) {
        return;
      }
      this.interceptor.$unbind(flags | LifecycleFlags.fromBind);
    }

    // Store flags which we can only receive during $bind and need to pass on
    // to the AST during evaluate/connect/assign
    this.persistentFlags = flags & LifecycleFlags.persistentBindingFlags;

    this.$scope = scope;
    this.$hostScope = hostScope;
    this.projection = projection;

    let sourceExpression = this.sourceExpression;
    if (sourceExpression.hasBind) {
      sourceExpression.bind(flags, scope, hostScope, this.interceptor);
    }

    let targetObserver = this.targetObserver as IBindingTargetObserver;
    if (!targetObserver) {
      targetObserver = this.targetObserver = new AttributeObserver(
        this.$platform,
        flags,
        this.observerLocator,
        this.target as IHtmlElement,
        this.targetProperty,
        this.targetAttribute,
      );
    }
    if (targetObserver.bind) {
      targetObserver.bind(flags);
    }

    // during bind, binding behavior might have changed sourceExpression
    sourceExpression = this.sourceExpression;
    const $mode = this.mode;
    const interceptor = this.interceptor;

    if ($mode & toViewOrOneTime) {
      const shouldConnect = ($mode & toView) > 0;
      interceptor.updateTarget(
        this.value = sourceExpression.evaluate(flags, scope, this.$hostScope, this.locator, shouldConnect ? interceptor : null),
        flags
      );
    }
    if ($mode & fromView) {
      targetObserver[this.id] |= LifecycleFlags.updateSource;
      targetObserver.subscribe(interceptor);
    }

    this.isBound = true;
  }

  public $unbind(flags: LifecycleFlags): void {
    if (!this.isBound) {
      return;
    }

    // clear persistent flags
    this.persistentFlags = LifecycleFlags.none;

    if (this.sourceExpression.hasUnbind) {
      this.sourceExpression.unbind(flags, this.$scope, this.$hostScope, this.interceptor);
    }
    this.$scope = null!;

    const targetObserver = this.targetObserver as IBindingTargetObserver;
    const task = this.task;
    if (targetObserver.unbind) {
      targetObserver.unbind!(flags);
    }
    if (targetObserver.unsubscribe) {
      targetObserver.unsubscribe(this.interceptor);
      targetObserver[this.id] &= ~LifecycleFlags.updateSource;
    }
    if (task != null) {
      task.cancel();
      this.task = null;
    }
    this.interceptor.unobserve(true);

    // remove isBound and isUnbinding flags
    this.isBound = false;
  }
}
