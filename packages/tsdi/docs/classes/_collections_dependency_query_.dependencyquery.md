[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["collections/dependency-query"](../modules/_collections_dependency_query_.md) › [DependencyQuery](_collections_dependency_query_.dependencyquery.md)

# Class: DependencyQuery ‹**TDependency**›

## Type parameters

▪ **TDependency**: *object*

## Hierarchy

* **DependencyQuery**

## Implements

* [Queryable](../interfaces/_collections_queryable_.queryable.md)‹TDependency›

## Index

### Constructors

* [constructor](_collections_dependency_query_.dependencyquery.md#constructor)

### Properties

* [_args](_collections_dependency_query_.dependencyquery.md#private-readonly-_args)
* [_container](_collections_dependency_query_.dependencyquery.md#private-readonly-_container)
* [_query](_collections_dependency_query_.dependencyquery.md#private-readonly-_query)

### Methods

* [[Symbol.iterator]](_collections_dependency_query_.dependencyquery.md#[symbol.iterator])
* [count](_collections_dependency_query_.dependencyquery.md#count)
* [first](_collections_dependency_query_.dependencyquery.md#first)
* [firstOrDefault](_collections_dependency_query_.dependencyquery.md#firstordefault)
* [select](_collections_dependency_query_.dependencyquery.md#select)
* [selectMany](_collections_dependency_query_.dependencyquery.md#selectmany)
* [single](_collections_dependency_query_.dependencyquery.md#single)
* [singleOrDefault](_collections_dependency_query_.dependencyquery.md#singleordefault)
* [toArray](_collections_dependency_query_.dependencyquery.md#toarray)
* [where](_collections_dependency_query_.dependencyquery.md#where)

## Constructors

###  constructor

\+ **new DependencyQuery**(`_container`: [DependencyContainer](_dependency_container_.dependencycontainer.md), `dependencies`: [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›[], `_args`: any[]): *[DependencyQuery](_collections_dependency_query_.dependencyquery.md)*

*Defined in [lib/collections/dependency-query.ts:10](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`_container` | [DependencyContainer](_dependency_container_.dependencycontainer.md) |
`dependencies` | [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›[] |
`_args` | any[] |

**Returns:** *[DependencyQuery](_collections_dependency_query_.dependencyquery.md)*

## Properties

### `Private` `Readonly` _args

• **_args**: *any[]*

*Defined in [lib/collections/dependency-query.ts:14](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L14)*

___

### `Private` `Readonly` _container

• **_container**: *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/collections/dependency-query.ts:12](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L12)*

___

### `Private` `Readonly` _query

• **_query**: *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹[DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency››*

*Defined in [lib/collections/dependency-query.ts:10](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L10)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹TDependency, any, TDependency›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:41](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L41)*

**Returns:** *Generator‹TDependency, any, TDependency›*

___

###  count

▸ **count**(): *number*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:19](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L19)*

**Returns:** *number*

___

###  first

▸ **first**(): *TDependency*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:24](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L24)*

**Returns:** *TDependency*

___

###  firstOrDefault

▸ **firstOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TDependency | TDefault*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:31](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L31)*

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue?` | TDefault |

**Returns:** *TDependency | TDefault*

___

###  select

▸ **select**‹**TReturn**›(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TDependency, TReturn›): *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:49](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L49)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TDependency, TReturn› |

**Returns:** *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

___

###  selectMany

▸ **selectMany**‹**TReturn**›(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TDependency, TReturn[]›): *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:54](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L54)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TDependency, TReturn[]› |

**Returns:** *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TReturn›*

___

###  single

▸ **single**(): *TDependency*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:59](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L59)*

**Returns:** *TDependency*

___

###  singleOrDefault

▸ **singleOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TDependency | TDefault*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:66](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L66)*

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue?` | TDefault |

**Returns:** *TDependency | TDefault*

___

###  toArray

▸ **toArray**(): *TDependency[]*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:76](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L76)*

**Returns:** *TDependency[]*

___

###  where

▸ **where**(`expression`: [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TDependency, boolean›): *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TDependency›*

*Implementation of [Queryable](../interfaces/_collections_queryable_.queryable.md)*

*Defined in [lib/collections/dependency-query.ts:87](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b1e22ef/packages/tsdi/lib/collections/dependency-query.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](../modules/_collections_query_expression_.md#queryexpression)‹TDependency, boolean› |

**Returns:** *[Queryable](../interfaces/_collections_queryable_.queryable.md)‹TDependency›*
