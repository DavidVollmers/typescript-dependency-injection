import {QueryExpression} from './query-expression'
import {Collection}      from './collection'

export interface Queryable<TType> extends Collection<TType>
{
  first (): TType

  firstOrDefault<TDefault = null> ( defaultValue?: TDefault ): TType | TDefault

  select<TReturn = TType> ( expression: QueryExpression<TType, TReturn> ): Queryable<TReturn>

  selectMany<TReturn = TType> ( expression: QueryExpression<TType, TReturn[]> ): Queryable<TReturn>

  single (): TType

  singleOrDefault<TDefault = null> ( defaultValue?: TDefault ): TType | TDefault

  where ( expression: QueryExpression<TType, boolean> ): Queryable<TType>
}