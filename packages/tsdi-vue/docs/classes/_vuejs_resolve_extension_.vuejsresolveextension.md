[@dvolper/tsdi-vue](../README.md) › [Globals](../globals.md) › ["vuejs-resolve-extension"](../modules/_vuejs_resolve_extension_.md) › [VueJSResolveExtension](_vuejs_resolve_extension_.vuejsresolveextension.md)

# Class: VueJSResolveExtension

## Hierarchy

* ResolveExtension

  ↳ **VueJSResolveExtension**

## Index

### Accessors

* [__tsdi__](_vuejs_resolve_extension_.vuejsresolveextension.md#static-__tsdi__)

### Methods

* [resolve](_vuejs_resolve_extension_.vuejsresolveextension.md#resolve)

## Accessors

### `Static` __tsdi__

• **get __tsdi__**(): *DependencyMetadata*

*Inherited from [VueJSResolveExtension](_vuejs_resolve_extension_.vuejsresolveextension.md).[__tsdi__](_vuejs_resolve_extension_.vuejsresolveextension.md#static-__tsdi__)*

Defined in tsdi/dist/es6/extensions/resolve-extension.d.ts:4

**Returns:** *DependencyMetadata*

## Methods

###  resolve

▸ **resolve**‹**TDependency**›(`dc`: DependencyContainer, `dependency`: TDependency): *TDependency*

*Overrides void*

*Defined in [tsdi-vue/lib/vuejs-resolve-extension.ts:5](https://github.com/DavidVollmers/typescript-dependency-injection/blob/6e805be/packages/tsdi-vue/lib/vuejs-resolve-extension.ts#L5)*

**Type parameters:**

▪ **TDependency**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`dc` | DependencyContainer |
`dependency` | TDependency |

**Returns:** *TDependency*
