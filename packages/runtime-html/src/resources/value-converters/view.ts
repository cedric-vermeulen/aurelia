import { ComposableObjectComponentType, IViewLocator, ViewSelector } from '../../templating/view';
import { valueConverter } from '@aurelia/runtime';
import type { ICustomElementViewModel } from '../../templating/controller';

@valueConverter('view')
export class ViewValueConverter {
  public constructor(
    @IViewLocator private readonly viewLocator: IViewLocator,
  ) {}

  public toView<T extends ICustomElementViewModel>(
    object: T | null | undefined,
    viewNameOrSelector?: string | ViewSelector
  ): ComposableObjectComponentType<T> | null {
    return this.viewLocator.getViewComponentForObject<T>(
      object,
      viewNameOrSelector
    );
  }
}
