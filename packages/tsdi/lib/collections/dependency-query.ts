import {DependencyContainer} from '../dependency-container'
import {DependencyCreator}   from '../dependency-creator'

export class DependencyQuery<TDependency extends object>
{
  public constructor ( private readonly _container: DependencyContainer,
                       private readonly _dependencies: DependencyCreator<TDependency>[],
                       private readonly _args: any[] )
  {
  }

  public count (): number
  {
    return this._dependencies.length
  }

  public first (): TDependency
  {
    if( !this._dependencies.length ) {
      throw new Error( '[@dvolper/tsdi]: No first element found.' )
    }
    return this._container.serve( this._dependencies[0],
                                  ...this._args )
  }

  public firstOrDefault<TDefault = null> ( defaultValue?: TDefault ): TDependency | TDefault
  {
    if( !this._dependencies.length ) {
      return defaultValue == null ? null : defaultValue
    }
    return this._container.serve( this._dependencies[0],
                                  ...this._args )
  }

  public* [ Symbol.iterator ] (): Generator<TDependency, any, TDependency>
  {
    for( const dependency of this._dependencies ) {
      yield this._container.serve( dependency,
                                   ...this._args )
    }
  }

  public single (): TDependency
  {
    if( this._dependencies.length !== 1 ) {
      throw new Error( '[@dvolper/tsdi]: No single element found.' )
    }
    return this._container.serve( this._dependencies[0],
                                  ...this._args )
  }

  public singleOrDefault<TDefault = null> ( defaultValue?: TDefault ): TDependency | TDefault
  {
    if( this._dependencies.length !== 1 ) {
      return defaultValue == null ? null : defaultValue
    }
    return this._container.serve( this._dependencies[0],
                                  ...this._args )
  }

  public toArray (): TDependency[]
  {
    const instances: TDependency[] = []
    for( const dependency of this._dependencies ) {
      instances.push( this._container.serve( dependency,
                                             ...this._args ) )
    }
    return instances
  }
}