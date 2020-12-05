[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["collections/dependency-query"](../modules/_collections_dependency_query_.md) › [DependencyQuery](_collections_dependency_query_.dependencyquery.md)

# Class: DependencyQuery ‹**TDependency**›

## Type parameters

▪ **TDependency**: *object*

## Hierarchy

* **DependencyQuery**

## Implements

* Queryable‹TDependency›

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

*Defined in [lib/collections/dependency-query.ts:7](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L7)*

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

*Defined in [lib/collections/dependency-query.ts:11](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L11)*

___

### `Private` `Readonly` _container

• **_container**: *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/collections/dependency-query.ts:9](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L9)*

___

### `Private` `Readonly` _query

• **_query**: *Queryable‹[DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency››*

*Defined in [lib/collections/dependency-query.ts:7](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L7)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹TDependency, any, TDependency›*

*Defined in [lib/collections/dependency-query.ts:16](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L16)*

**Returns:** *Generator‹TDependency, any, TDependency›*

___

###  count

▸ **count**(): *number*

*Defined in [lib/collections/dependency-query.ts:24](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L24)*

**Returns:** *number*

___

###  first

▸ **first**(): *TDependency*

*Defined in [lib/collections/dependency-query.ts:29](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L29)*

**Returns:** *TDependency*

___

###  firstOrDefault

▸ **firstOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TDependency | TDefault*

*Defined in [lib/collections/dependency-query.ts:36](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L36)*

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue?` | TDefault |

**Returns:** *TDependency | TDefault*

___

###  select

▸ **select**‹**TReturn**›(`expression`: QueryExpression‹TDependency, TReturn›): *Queryable‹TReturn›*

*Defined in [lib/collections/dependency-query.ts:46](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L46)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | QueryExpression‹TDependency, TReturn› |

**Returns:** *Queryable‹TReturn›*

___

###  selectMany

▸ **selectMany**‹**TReturn**›(`expression`: QueryExpression‹TDependency, TReturn[]›): *Queryable‹TReturn›*

*Defined in [lib/collections/dependency-query.ts:56](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L56)*

**Type parameters:**

▪ **TReturn**

**Parameters:**

Name | Type |
------ | ------ |
`expression` | QueryExpression‹TDependency, TReturn[]› |

**Returns:** *Queryable‹TReturn›*

___

###  single

▸ **single**(): *TDependency*

*Defined in [lib/collections/dependency-query.ts:66](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L66)*

**Returns:** *TDependency*

___

###  singleOrDefault

▸ **singleOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TDependency | TDefault*

*Defined in [lib/collections/dependency-query.ts:73](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L73)*

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

*Defined in [lib/collections/dependency-query.ts:83](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L83)*

**Returns:** *TDependency[]*

___

###  where

▸ **where**(`expression`: QueryExpression‹TDependency, boolean›): *Queryable‹TDependency›*

*Defined in [lib/collections/dependency-query.ts:93](https://github.com/DavidVollmers/typescript-dependency-injection/blob/61a161f/packages/tsdi/lib/collections/dependency-query.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | QueryExpression‹TDependency, boolean› |

**Returns:** *Queryable‹TDependency›*
