import {Queryable}       from './queryable'
import {QueryExpression} from './query-expression'

type LazyOperation<TType> = QueryExpression<TType, boolean | TType | TType[]>

enum OperationJoin
{
  None   = 0,
  Where  = 1,
  Select = 2
}

export class LazyQuery<TType> implements Queryable<TType>
{
  private _operations: {
    expression: LazyOperation<TType>,
    readonly join?: OperationJoin
  }[] = []

  public constructor ( private _items: TType[] )
  {
  }

  public* [ Symbol.iterator ] (): Generator<TType, any, TType>
  {
    const items = this.compute()
    for( const item of items ) {
      yield item
    }
  }

  protected compute (): TType[]
  {
    if( !this._operations.length ) return this._items.slice()
    let items = this._items.slice()
    for( const operation of this._operations ) {
      for( let index = 0; index < items.length; index++ ) {
        const result = operation.expression( items[ index ] )
        if( result !== undefined ) {
          if( Array.isArray( result ) ) {
            items.push( ...result )
          }
          else if( typeof result === 'boolean' ) {
            if( !result ) {
              items.splice( index--,
                            1 )
            }
          }
          else {
            items[ index ] = result
          }
        }
        else {
          items.splice( index--,
                        1 )
        }
      }
    }
    return items
  }

  private joinOperations ( join: OperationJoin,
                           operation1: LazyOperation<TType>,
                           operation2: LazyOperation<TType> ): LazyOperation<TType>
  {
    if( join === OperationJoin.Where ) {
      return function ( item: TType ): boolean {
        return !!( operation1( item ) && operation2( item ) )
      }
    }
    return function ( item: TType ) {
      const result = operation1( item )
      if( result !== undefined ) {
        if( Array.isArray( result ) ) {
          const items: TType[] = []
          for( const i of result ) {
            items.push( <TType>operation2( i ) )
          }
          return items
        }
        return operation2( <TType>result )
      }
      return operation2( item )
    }
  }

  private pushOperation ( operation: LazyOperation<TType>,
                          join: OperationJoin = OperationJoin.None ): void
  {
    if( join && this._operations.length ) {
      const last = this._operations[ this._operations.length - 1 ]
      if( last.join === join ) {
        this._operations[ this._operations.length - 1 ].expression = this.joinOperations( join,
                                                                                          last.expression,
                                                                                          operation )
        return
      }
    }
    this._operations.push( {
                             expression: operation,
                             join,
                           } )
  }

  public count (): number
  {
    return this.compute().length
  }

  public first (): TType
  {
    const items = this.compute()
    if( !items.length ) {
      throw new Error( '[@dvolper/tsdi]: No first element found.' )
    }
    return items[ 0 ]
  }

  public firstOrDefault<TDefault = null> ( defaultValue?: TDefault ): TType | TDefault
  {
    const items = this.compute()
    if( !items.length ) {
      return defaultValue == null ? null : defaultValue
    }
    return items[ 0 ]
  }

  public select<TReturn = TType> ( expression: QueryExpression<TType, TReturn> ): Queryable<TReturn>
  {
    this.pushOperation( <any>expression,
                        OperationJoin.Select )
    return <any>this
  }

  public selectMany<TReturn = TType> ( expression: QueryExpression<TType, TReturn[]> ): Queryable<TReturn>
  {
    this.pushOperation( <any>expression,
                        OperationJoin.Select )
    return <any>this
  }

  public single (): TType
  {
    const items = this.compute()
    if( items.length !== 1 ) {
      throw new Error( '[@dvolper/tsdi]: No single element found.' )
    }
    return items[ 0 ]
  }

  public singleOrDefault<TDefault = null> ( defaultValue?: TDefault ): TType | TDefault
  {
    const items = this.compute()
    if( items.length !== 1 ) {
      return defaultValue == null ? null : defaultValue
    }
    return items[ 0 ]
  }

  public toArray (): TType[]
  {
    return this.compute()
  }

  public where ( expression: QueryExpression<TType, boolean> ): Queryable<TType>
  {
    this.pushOperation(
      item => {
        return expression( item ) ? item : undefined
      },
      OperationJoin.Where )
    return this
  }
}