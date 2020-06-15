import {TypeReference}                                    from '../type-reference'
import {DependencyInjectionBehaviour, DependencyMetadata} from '../dependency-metadata'

export class DependencyKeyGenerator
{
  public static get __tsdi__ (): DependencyMetadata
  {
    return {
      key: '@dvolper/tsdi::DependencyKeyGenerator',
      injectionBehaviour: DependencyInjectionBehaviour.Singleton,
    }
  }

  public verify ( target: TypeReference ): void
  {
    if( !target.__tsdi__.key ) {
      target.__tsdi__.key = target.name + '__tsdi__' + Math.round( Math.random()
                                                                   * 1000000 )
    }
  }
}