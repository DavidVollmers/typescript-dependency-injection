[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["collections/queryable"](../modules/_collections_queryable_.md) › [Queryable](_collections_queryable_.queryable.md)

# Interface: Queryable ‹**TType**›

## Type parameters

▪ **TType**

## Hierarchy

* [Collection](_collections_collection_.collection.md)‹TType›

  ↳ **Queryable**

## Implemented by

* [DependencyQuery](../classes/_collections_dependency_query_.dependencyquery.md)
* [LazyQuery](../classes/_collections_lazy_query_.lazyquery.md)

## Index

### Methods

* [[Symbol.iterator]](_collections_queryable_.queryable.md#[symbol.iterator])
* [count](_collections_queryable_.queryable.md#count)
* [first](_collections_queryable_.queryable.md#first)
* [firstOrDefault](_collections_queryable_.queryable.md#firstordefault)
* [select](_collections_queryable_.queryable.md#select)
* [selectMany](_collections_queryable_.queryable.md#selectmany)
* [single](_collections_queryable_.queryable.md#single)
* [singleOrDefault](_collections_queryable_.queryable.md#singleordefault)
* [toArray](_collections_queryable_.queryable.md#toarray)
* [where](_collections_queryable_.queryable.md#where)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹TType, any, TType›*

*Inherited from [Collection](_collections_collection_.collection.md).[[Symbol.iterator]](_collections_collection_.collection.md#[symbol.iterator])*

*Defined in [lib/collections/collection.ts:3](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/collection.ts#L3)*

**Returns:** *Generator‹TType, any, TType›*

___

###  count

▸ **count**(): *number*

*Inherited from [Collection](_collections_collection_.collection.md).[count](_collections_collection_.collection.md#count)*

*Defined in [lib/collections/collection.ts:5](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/collection.ts#L5)*

**Returns:** *number*

___

###  first

▸ **first**(): *TType*

*Defined in [lib/collections/queryable.ts:6](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L6)*

**Returns:** *TType*

___

###  firstOrDefault

▸ **firstOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TType | TDefault*

*Defined in [lib/collections/queryable.ts:8](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L8)*

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue?` | TDefault |

**Returns:** *TType | TDefault*

___

###  select

▸ **select**‹**TReturn**›(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn›): *[Queryable](_collections_queryable_.queryable.md)‹TReturn›*

*Defined in [lib/collections/queryable.ts:10](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L10)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn› |

**Returns:** *[Queryable](_collections_queryable_.queryable.md)‹TReturn›*

___

###  selectMany

▸ **selectMany**‹**TReturn**›(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn[]›): *[Queryable](_collections_queryable_.queryable.md)‹TReturn›*

*Defined in [lib/collections/queryable.ts:12](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L12)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn[]› |

**Returns:** *[Queryable](_collections_queryable_.queryable.md)‹TReturn›*

___

###  single

▸ **single**(): *TType*

*Defined in [lib/collections/queryable.ts:14](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L14)*

**Returns:** *TType*

___

###  singleOrDefault

▸ **singleOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TType | TDefault*

*Defined in [lib/collections/queryable.ts:16](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L16)*

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue?` | TDefault |

**Returns:** *TType | TDefault*

___

###  toArray

▸ **toArray**(): *TType[]*

*Inherited from [Collection](_collections_collection_.collection.md).[toArray](_collections_collection_.collection.md#toarray)*

*Defined in [lib/collections/collection.ts:7](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/collection.ts#L7)*

**Returns:** *TType[]*

___

###  where

▸ **where**(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, boolean›): *[Queryable](_collections_queryable_.queryable.md)‹TType›*

*Defined in [lib/collections/queryable.ts:18](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/collections/queryable.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, boolean› |

**Returns:** *[Queryable](_collections_queryable_.queryable.md)‹TType›*
