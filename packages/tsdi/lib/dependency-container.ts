import {DependencyCreator}                          from './dependency-creator'
import {InvalidArgumentError, MissingArgumentError} from './resources/errors'

export class DependencyContainer
{
  public create<TDependency extends object> ( dependency: DependencyCreator<TDependency> ): TDependency
  {
    if( !dependency ) {
      throw new Error( MissingArgumentError( 'dependency',
                                             'DependencyContainer::create' ) )
    }
    if( typeof dependency !== 'function' ) {
      throw new Error( InvalidArgumentError( 'dependency',
                                             'of type Function',
                                             'DependencyContainer::create' ) )
    }
    return new dependency()
  }
}