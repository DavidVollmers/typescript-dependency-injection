import {DependencyInjectionBehaviour, DependencyMetadata} from '../dependency-metadata'
import {DependencyContainer}                              from '../dependency-container'

export abstract class ResolveExtension
{
  public static get __tsdi__ (): DependencyMetadata
  {
    return {
      key: '@dvolper/tsdi::ResolveDecoratorExtension',
      injectionBehaviour: DependencyInjectionBehaviour.Singleton,
    }
  }

  public abstract resolve<TDependency extends object> ( dc: DependencyContainer,
                                                        dependency: TDependency ): TDependency
}