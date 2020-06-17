[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["collections/lazy-query"](../modules/_collections_lazy_query_.md) › [LazyQuery](_collections_lazy_query_.lazyquery.md)

# Class: LazyQuery ‹**TType**›

## Type parameters

▪ **TType**

## Hierarchy

* **LazyQuery**

## Implements

* [Queryable](../interfaces/_collections_queryable_.queryable.md)‹TType›

## Index

### Constructors

* [constructor](_collections_lazy_query_.lazyquery.md#constructor)

### Properties

* [_items](_collections_lazy_query_.lazyquery.md#private-_items)
* [_operations](_collections_lazy_query_.lazyquery.md#private-_operations)

### Methods

* [[Symbol.iterator]](_collections_lazy_query_.lazyquery.md#[symbol.iterator])
* [compute](_collections_lazy_query_.lazyquery.md#protected-compute)
* [count](_collections_lazy_query_.lazyquery.md#count)
* [first](_collections_lazy_query_.lazyquery.md#first)
* [firstOrDefault](_collections_lazy_query_.lazyquery.md#firstordefault)
* [joinOperations](_collections_lazy_query_.lazyquery.md#private-joinoperations)
* [pushOperation](_collections_lazy_query_.lazyquery.md#private-pushoperation)
* [select](_collections_lazy_query_.lazyquery.md#select)
* [selectMany](_collections_lazy_query_.lazyquery.md#selectmany)
* [single](_collections_lazy_query_.lazyquery.md#single)
* [singleOrDefault](_collections_lazy_query_.lazyquery.md#singleordefault)
* [toArray](_collections_lazy_query_.lazyquery.md#toarray)
* [where](_collections_lazy_query_.lazyquery.md#where)

## Constructors

###  constructor

\+ **new LazyQuery**(`_items`: TType[]): *[LazyQuery](_collections_lazy_query_.lazyquery.md)*

*Defined in [lib/collections/lazy-query.ts:18](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`_items` | TType[] |

**Returns:** *[LazyQuery](_collections_lazy_query_.lazyquery.md)*

## Properties

### `Private` _items

• **_items**: *TType[]*

*Defined in [lib/collections/lazy-query.ts:20](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L20)*

___

### `Private` _operations

• **_operations**: *object[]* = []

*Defined in [lib/collections/lazy-query.ts:15](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L15)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹TType, any, TType›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:24](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L24)*

**Returns:** *Generator‹TType, any, TType›*

___

### `Protected` compute

▸ **compute**(): *TType[]*

*Defined in [lib/collections/lazy-query.ts:32](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L32)*

**Returns:** *TType[]*

___

###  count

▸ **count**(): *number*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:105](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L105)*

**Returns:** *number*

___

###  first

▸ **first**(): *TType*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:110](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L110)*

**Returns:** *TType*

___

###  firstOrDefault

▸ **firstOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TType | TDefault*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:119](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L119)*

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue?` | TDefault |

**Returns:** *TType | TDefault*

___

### `Private` joinOperations

▸ **joinOperations**(`join`: [OperationJoin](../enums/_collections_lazy_query_.operationjoin.md), `operation1`: [LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType›, `operation2`: [LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType›): *[LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType›*

*Defined in [lib/collections/lazy-query.ts:62](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`join` | [OperationJoin](../enums/_collections_lazy_query_.operationjoin.md) |
`operation1` | [LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType› |
`operation2` | [LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType› |

**Returns:** *[LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType›*

___

### `Private` pushOperation

▸ **pushOperation**(`operation`: [LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType›, `join`: [OperationJoin](../enums/_collections_lazy_query_.operationjoin.md)): *void*

*Defined in [lib/collections/lazy-query.ts:87](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L87)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`operation` | [LazyOperation](../modules/_collections_lazy_query_.md#lazyoperation)‹TType› | - |
`join` | [OperationJoin](../enums/_collections_lazy_query_.operationjoin.md) | OperationJoin.None |

**Returns:** *void*

___

###  select

▸ **select**‹**TReturn**›(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn›): *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:128](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L128)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn› |

**Returns:** *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

___

###  selectMany

▸ **selectMany**‹**TReturn**›(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn[]›): *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:135](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L135)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, TReturn[]› |

**Returns:** *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

___

###  single

▸ **single**(): *TType*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:142](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L142)*

**Returns:** *TType*

___

###  singleOrDefault

▸ **singleOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TType | TDefault*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:151](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L151)*

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

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:160](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L160)*

**Returns:** *TType[]*

___

###  where

▸ **where**(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, boolean›): *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TType›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/lazy-query.ts:165](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/lazy-query.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TType, boolean› |

**Returns:** *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TType›*
