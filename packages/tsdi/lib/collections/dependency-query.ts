import {LazyQuery}           from './lazy-query'
import {Queryable}           from './queryable'
import {DependencyContainer} from '../dependency-container'
import {QueryExpression}     from './query-expression'
import {DependencyCreator}   from '../dependency-creator'

//TODO extend LazyQuery since returning it from operations is bullshit... (select, where, etc.)
export class DependencyQuery<TDependency extends object> implements Queryable<TDependency>
{
  private readonly _query: Queryable<DependencyCreator<TDependency>>

  public constructor ( private readonly _container: DependencyContainer,
                       dependencies: DependencyCreator<TDependency>[],
                       private readonly _args: any[] )
  {
    this._query = new LazyQuery( dependencies )
  }

  public count (): number
  {
    return this._query.count()
  }

  public first (): TDependency
  {
    const first = this._query.first()
    return this._container.serve( first,
                                  ...this._args )
  }

  public firstOrDefault<TDefault = null> ( defaultValue?: TDefault ): TDependency | TDefault
  {
    const firstOrDefault = this._query.firstOrDefault( defaultValue )
    if( firstOrDefault == null || firstOrDefault === defaultValue ) {
      return defaultValue == null ? null : defaultValue
    }
    return this._container.serve( <DependencyCreator<TDependency>>firstOrDefault,
                                  ...this._args )
  }

  public* [ Symbol.iterator ] (): Generator<TDependency, any, TDependency>
  {
    for( const dependency of this._query ) {
      yield this._container.serve( dependency,
                                   ...this._args )
    }
  }

  public select<TReturn = TDependency> ( expression: QueryExpression<TDependency, TReturn> ): Queryable<TReturn>
  {
    throw new Error( 'TODO' )
  }

  public selectMany<TReturn = TDependency> ( expression: QueryExpression<TDependency, TReturn[]> ): Queryable<TReturn>
  {
    throw new Error( 'TODO' )
  }

  public single (): TDependency
  {
    const single = this._query.single()
    return this._container.serve( single,
                                  ...this._args )
  }

  public singleOrDefault<TDefault = null> ( defaultValue?: TDefault ): TDependency | TDefault
  {
    const singleOrDefault = this._query.singleOrDefault( defaultValue )
    if( singleOrDefault == null || singleOrDefault === defaultValue ) {
      return defaultValue == null ? null : defaultValue
    }
    return this._container.serve( <DependencyCreator<TDependency>>singleOrDefault,
                                  ...this._args )
  }

  public toArray (): TDependency[]
  {
    const instances: TDependency[] = []
    const dependencies             = this._query.toArray()
    for( const dependency of dependencies ) {
      instances.push( this._container.serve( dependency,
                                             ...this._args ) )
    }
    return instances
  }

  public where ( expression: QueryExpression<TDependency, boolean> ): Queryable<TDependency>
  {
    throw new Error( 'TODO' )
  }
}