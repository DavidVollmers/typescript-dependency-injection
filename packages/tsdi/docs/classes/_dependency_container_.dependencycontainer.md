[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["dependency-container"](../modules/_dependency_container_.md) › [DependencyContainer](_dependency_container_.dependencycontainer.md)

# Class: DependencyContainer

Resembles the entry point for any dependency injection.
Each instance has its own dependency and instance cache.
Only dependencies marked with `@Singleton` are globally unique.

## Hierarchy

* **DependencyContainer**

## Implements

* AsyncDisposable

## Index

### Constructors

* [constructor](_dependency_container_.dependencycontainer.md#constructor)

### Properties

* [_abstractionMapping](_dependency_container_.dependencycontainer.md#private-readonly-_abstractionmapping)
* [_currentScope](_dependency_container_.dependencycontainer.md#private-optional-_currentscope)
* [_registeredDependencies](_dependency_container_.dependencycontainer.md#private-readonly-_registereddependencies)
* [_scopedInstances](_dependency_container_.dependencycontainer.md#private-readonly-_scopedinstances)
* [_singletonInstances](_dependency_container_.dependencycontainer.md#private-readonly-_singletoninstances)
* [servingBehaviour](_dependency_container_.dependencycontainer.md#servingbehaviour)
* [_globalInstance](_dependency_container_.dependencycontainer.md#static-private-readonly-_globalinstance)

### Accessors

* [global](_dependency_container_.dependencycontainer.md#static-global)

### Methods

* [abstract](_dependency_container_.dependencycontainer.md#abstract)
* [add](_dependency_container_.dependencycontainer.md#add)
* [dispose](_dependency_container_.dependencycontainer.md#dispose)
* [disposeCurrentScope](_dependency_container_.dependencycontainer.md#private-disposecurrentscope)
* [exitScope](_dependency_container_.dependencycontainer.md#exitscope)
* [query](_dependency_container_.dependencycontainer.md#query)
* [resolve](_dependency_container_.dependencycontainer.md#resolve)
* [resolveCreationArgument](_dependency_container_.dependencycontainer.md#private-resolvecreationargument)
* [resolveCreationArguments](_dependency_container_.dependencycontainer.md#private-resolvecreationarguments)
* [serve](_dependency_container_.dependencycontainer.md#serve)
* [useScope](_dependency_container_.dependencycontainer.md#usescope)
* [verifyMetadata](_dependency_container_.dependencycontainer.md#private-verifymetadata)
* [isPrototypeAssignableFrom](_dependency_container_.dependencycontainer.md#static-isprototypeassignablefrom)
* [resolveTargetByContext](_dependency_container_.dependencycontainer.md#static-private-resolvetargetbycontext)

## Constructors

###  constructor

\+ **new DependencyContainer**(`scope?`: string): *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/dependency-container.ts:58](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L58)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scope?` | string | If specified the instance will directly use the specific scope. (See `DependencyContainer::useScope`)  |

**Returns:** *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

## Properties

### `Private` `Readonly` _abstractionMapping

• **_abstractionMapping**: *object*

*Defined in [lib/dependency-container.ts:35](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L35)*

#### Type declaration:

* \[ **key**: *string*\]: string[]

___

### `Private` `Optional` _currentScope

• **_currentScope**? : *string*

*Defined in [lib/dependency-container.ts:44](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L44)*

___

### `Private` `Readonly` _registeredDependencies

• **_registeredDependencies**: *object*

*Defined in [lib/dependency-container.ts:32](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L32)*

#### Type declaration:

* \[ **key**: *string*\]: [RegisteredDependency](../interfaces/_dependency_container_.registereddependency.md)‹any›

___

### `Private` `Readonly` _scopedInstances

• **_scopedInstances**: *object*

*Defined in [lib/dependency-container.ts:41](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L41)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

### `Private` `Readonly` _singletonInstances

• **_singletonInstances**: *object*

*Defined in [lib/dependency-container.ts:38](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L38)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

###  servingBehaviour

• **servingBehaviour**: *[ServingBehaviour](../enums/_dependency_container_.servingbehaviour.md)* = ServingBehaviour.Greedy

*Defined in [lib/dependency-container.ts:45](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L45)*

___

### `Static` `Private` `Readonly` _globalInstance

▪ **_globalInstance**: *[DependencyContainer](_dependency_container_.dependencycontainer.md)* = new DependencyContainer( 'global' )

*Defined in [lib/dependency-container.ts:31](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L31)*

## Accessors

### `Static` global

• **get global**(): *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/dependency-container.ts:55](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L55)*

Do not use the global instance to add dependencies!
Every dependency added to any DependencyContainer instance will also be cached globally.
This means whenever you do not have access to a specific DependencyContainer instance you can try resolving dependencies via
`DependencyContainer.global.create` or `DependencyContainer.global.resolve`.

**Returns:** *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

The global DependencyContainer instance

## Methods

###  abstract

▸ **abstract**‹**TAbstraction**›(`abstraction`: [AbstractDependency](../modules/_abstract_dependency_.md#abstractdependency)‹TAbstraction›, ...`args`: any[]): *[DependencyQuery](_collections_dependency_query_.dependencyquery.md)‹TAbstraction›*

*Defined in [lib/dependency-container.ts:179](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L179)*

Queries the DependencyContainer cache based on a specified abstraction.

**Type parameters:**

▪ **TAbstraction**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`abstraction` | [AbstractDependency](../modules/_abstract_dependency_.md#abstractdependency)‹TAbstraction› | The abstraction which will be used to query the dependency cache |
`...args` | any[] | Optional arguments used to create dependency instances later on (See `DependencyContainer::serve`) |

**Returns:** *[DependencyQuery](_collections_dependency_query_.dependencyquery.md)‹TAbstraction›*

The DependencyQuery containing all cached implementations of the specified abstraction (See `DependencyQuery`)

___

###  add

▸ **add**‹**TDependency**›(`dependency`: [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›, `provider?`: [DependencyProvider](../modules/_dependency_provider_.md#dependencyprovider)‹TDependency›): *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/dependency-container.ts:77](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L77)*

Adds a dependency to the DependencyContainer cache and marks it as `@Injectable`.

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dependency` | [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency› | The dependency to be injected |
`provider?` | [DependencyProvider](../modules/_dependency_provider_.md#dependencyprovider)‹TDependency› | Optional dependency provider callback (Can be used to override the dependency creation behaviour) |

**Returns:** *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

The DependencyContainer instance itself (for chaining .add calls)

▸ **add**‹**TDependency**, **TAbstraction**›(`abstraction`: [AbstractDependency](../modules/_abstract_dependency_.md#abstractdependency)‹TAbstraction›, `implementation`: [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›, `provider?`: [DependencyProvider](../modules/_dependency_provider_.md#dependencyprovider)‹TDependency›): *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

*Defined in [lib/dependency-container.ts:88](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L88)*

Adds a dependency as an implementation of an abstraction to the DependencyContainer cache and marks it as `@Injectable`.
When mapping a dependency to an abstraction it is possible to query it based on the abstraction later on. (See `DependencyContainer::abstract`)

**Type parameters:**

▪ **TDependency**: *TAbstraction*

▪ **TAbstraction**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`abstraction` | [AbstractDependency](../modules/_abstract_dependency_.md#abstractdependency)‹TAbstraction› | The abstraction of the dependency |
`implementation` | [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency› | The implementation of the specified abstraction |
`provider?` | [DependencyProvider](../modules/_dependency_provider_.md#dependencyprovider)‹TDependency› | Optional dependency provider callback (Can be used to override the dependency creation behaviour) |

**Returns:** *[DependencyContainer](_dependency_container_.dependencycontainer.md)*

The DependencyContainer instance itself (for chaining .add calls)

___

###  dispose

▸ **dispose**(): *Promise‹void›*

*Defined in [lib/dependency-container.ts:439](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L439)*

**Returns:** *Promise‹void›*

___

### `Private` disposeCurrentScope

▸ **disposeCurrentScope**(): *Promise‹void›*

*Defined in [lib/dependency-container.ts:536](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L536)*

**Returns:** *Promise‹void›*

___

###  exitScope

▸ **exitScope**(`scope`: string): *Promise‹void›*

*Defined in [lib/dependency-container.ts:419](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L419)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | string |

**Returns:** *Promise‹void›*

___

###  query

▸ **query**(...`args`: any[]): *[DependencyQuery](_collections_dependency_query_.dependencyquery.md)‹any›*

*Defined in [lib/dependency-container.ts:379](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L379)*

Queries the DependencyContainer cache.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | Optional arguments used to create dependency instances later on (See `DependencyContainer::serve`) |

**Returns:** *[DependencyQuery](_collections_dependency_query_.dependencyquery.md)‹any›*

The DependencyQuery containing all cached implementations (See `DependencyQuery`)

___

###  resolve

▸ **resolve**‹**TDependency**›(`dependency`: TDependency): *TDependency*

*Defined in [lib/dependency-container.ts:316](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L316)*

Resolves an instance of a dependency.

**`remarks`** 
Only properties of an instance marked with `@Resolve` will be resolved.
You can extend the default resolve behaviour of any DependencyContainer by adding a derivation of `ResolveExtension` to it:
(See `ResolveExtension`)
```ts
import {DependencyContainer, ResolveExtension} from '@dvolper/tsdi'

class CustomResolveExtension extends ResolveExtension {
    public resolve<TDependency extends object> ( dc: DependencyContainer, dependency: TDependency ): TDependency
    {
        // Custom resolve logic...
        return dependency
    }
}

const dc = new DependencyContainer
dc.add( CustomResolveExtension )

// Whenever .serve or .resolve is called on the extended DependencyContainer the CustomResolveExtension will be triggered.
const instance = dc.serve( ... )
```

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dependency` | TDependency | The instance to be resolved |

**Returns:** *TDependency*

The resolved instance

___

### `Private` resolveCreationArgument

▸ **resolveCreationArgument**‹**TDependency**›(`dependency`: [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›, `target`: any, `args`: any[]): *any*

*Defined in [lib/dependency-container.ts:498](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L498)*

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`dependency` | [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency› |
`target` | any |
`args` | any[] |

**Returns:** *any*

___

### `Private` resolveCreationArguments

▸ **resolveCreationArguments**‹**TDependency**›(`dependency`: [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›, `args`: any[]): *any[]*

*Defined in [lib/dependency-container.ts:479](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L479)*

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`dependency` | [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency› |
`args` | any[] |

**Returns:** *any[]*

___

###  serve

▸ **serve**‹**TDependency**›(`dependency`: [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency›, ...`args`: any[]): *TDependency*

*Defined in [lib/dependency-container.ts:249](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L249)*

Serves a resolved instance of the specified dependency. (See `DependencyContainer::resolve`)

**`remarks`** 
The constructor arguments of a required dependency will be resolved in the following manner when creating an instance:

If no reflection metadata is emitted for the required dependency (No decorator used)

 => Only the optional arguments passed to `DependencyContainer::serve` will be used (No type checking possible)

Else, the reflection metadata is checked first...

If the reflection of an argument is a known dependency (in the current DependencyContainer cache)

 => The known dependency will be served

If the argument for the same index in the optional arguments passed to `DependencyContainer::serve` matches the type of the reflection

 => Use the optional argument

If the reflection of an argument is a known abstraction of a dependency (in the current DependencyContainer cache)

 => The first found implementation of the known abstraction will be served

Else

 => `null` will be served (Different to when no reflection metadata is emitted and no optional arguments are passed => `undefined`)

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dependency` | [DependencyCreator](../modules/_dependency_creator_.md#dependencycreator)‹TDependency› | The specific dependency for which an instance is required |
`...args` | any[] | Optional arguments used to create the dependency instance |

**Returns:** *TDependency*

The resolved instance

___

###  useScope

▸ **useScope**(`scope`: string): *void*

*Defined in [lib/dependency-container.ts:396](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L396)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | string |

**Returns:** *void*

___

### `Private` verifyMetadata

▸ **verifyMetadata**(`target`: [TypeReference](../interfaces/_type_reference_.typereference.md)): *void*

*Defined in [lib/dependency-container.ts:456](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [TypeReference](../interfaces/_type_reference_.typereference.md) |

**Returns:** *void*

___

### `Static` isPrototypeAssignableFrom

▸ **isPrototypeAssignableFrom**(`prototype`: any, `type`: [TypeReference](../interfaces/_type_reference_.typereference.md)): *boolean*

*Defined in [lib/dependency-container.ts:573](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L573)*

**Parameters:**

Name | Type |
------ | ------ |
`prototype` | any |
`type` | [TypeReference](../interfaces/_type_reference_.typereference.md) |

**Returns:** *boolean*

___

### `Static` `Private` resolveTargetByContext

▸ **resolveTargetByContext**(`target`: any, `context?`: any[]): *any*

*Defined in [lib/dependency-container.ts:549](https://github.com/DavidVollmers/typescript-dependency-injection/blob/2be923b/packages/tsdi/lib/dependency-container.ts#L549)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |
`context?` | any[] |

**Returns:** *any*
