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

*Defined in [lib/collections/dependency-query.ts:8](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L8)*

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

*Defined in [lib/collections/dependency-query.ts:12](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L12)*

___

### `Private` `Readonly` _container

• **_container**: *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/collections/dependency-query.ts:10](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L10)*

___

### `Private` `Readonly` _query

• **_query**: *Queryable‹[DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency››*

*Defined in [lib/collections/dependency-query.ts:8](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L8)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹TDependency, any, TDependency›*

*Defined in [lib/collections/dependency-query.ts:39](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L39)*

**Returns:** *Generator‹TDependency, any, TDependency›*

___

###  count

▸ **count**(): *number*

*Defined in [lib/collections/dependency-query.ts:17](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L17)*

**Returns:** *number*

___

###  first

▸ **first**(): *TDependency*

*Defined in [lib/collections/dependency-query.ts:22](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L22)*

**Returns:** *TDependency*

___

###  firstOrDefault

▸ **firstOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TDependency | TDefault*

*Defined in [lib/collections/dependency-query.ts:29](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L29)*

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

*Defined in [lib/collections/dependency-query.ts:47](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L47)*

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

*Defined in [lib/collections/dependency-query.ts:52](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L52)*

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

*Defined in [lib/collections/dependency-query.ts:57](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L57)*

**Returns:** *TDependency*

___

###  singleOrDefault

▸ **singleOrDefault**‹**TDefault**›(`defaultValue?`: TDefault): *TDependency | TDefault*

*Defined in [lib/collections/dependency-query.ts:64](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L64)*

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

*Defined in [lib/collections/dependency-query.ts:74](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L74)*

**Returns:** *TDependency[]*

___

###  where

▸ **where**(`expression`: QueryExpression‹TDependency, boolean›): *Queryable‹TDependency›*

*Defined in [lib/collections/dependency-query.ts:85](https://github.com/DavidVollmers/typescript-dependency-injection/blob/eb92b3f/packages/tsdi/lib/collections/dependency-query.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | QueryExpression‹TDependency, boolean› |

**Returns:** *Queryable‹TDependency›*
