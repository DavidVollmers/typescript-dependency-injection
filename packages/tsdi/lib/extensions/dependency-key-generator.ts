import {TypeReference}     from '../type-reference'

export class DependencyKeyGenerator
{
  public verify ( target: TypeReference ): void
  {
    if( !target.__tsdi__.key ) {
      target.__tsdi__.key = target.name + '__tsdi__' + Math.round( Math.random()
                                                                   * 1000000 )
    }
  }
}