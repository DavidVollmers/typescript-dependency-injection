[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["extensions/resolve-extension"](../modules/_extensions_resolve_extension_.md) › [ResolveExtension](_extensions_resolve_extension_.resolveextension.md)

# Class: ResolveExtension

## Hierarchy

* **ResolveExtension**

## Index

### Accessors

* [__tsdi__](_extensions_resolve_extension_.resolveextension.md#static-__tsdi__)

### Methods

* [resolve](_extensions_resolve_extension_.resolveextension.md#abstract-resolve)

## Accessors

### `Static` __tsdi__

• **get __tsdi__**(): *[DependencyMetadata](../modules/_dependency_metadata_.md#dependencymetadata)*

*Defined in [lib/extensions/resolve-extension.ts:6](https://github.com/DavidVollmers/typescript-dependency-injection/blob/4059c40/packages/tsdi/lib/extensions/resolve-extension.ts#L6)*

**Returns:** *[DependencyMetadata](../modules/_dependency_metadata_.md#dependencymetadata)*

## Methods

### `Abstract` resolve

▸ **resolve**‹**TDependency**›(`dc`: [DependencyContainer](_dependency_container_.dependencycontainer.md), `dependency`: TDependency): *TDependency*

*Defined in [lib/extensions/resolve-extension.ts:14](https://github.com/DavidVollmers/typescript-dependency-injection/blob/4059c40/packages/tsdi/lib/extensions/resolve-extension.ts#L14)*

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`dc` | [DependencyContainer](_dependency_container_.dependencycontainer.md) |
`dependency` | TDependency |

**Returns:** *TDependency*
