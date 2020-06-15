import {TypeReference}                                    from '../type-reference'
import {DependencyInjectionBehaviour, DependencyMetadata} from '../dependency-metadata'

export abstract class ResolveDecoratorExtension
{
  public static get __tsdi__ (): DependencyMetadata
  {
    return {
      key: '@dvolper/tsdi::ResolveDecoratorExtension',
      injectionBehaviour: DependencyInjectionBehaviour.Singleton,
    }
  }

  public abstract resolve ( target: TypeReference,
                            propertyKey: string,
                            metadata?: any ): void
}