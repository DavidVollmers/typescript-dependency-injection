[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["type-reference"](../modules/_type_reference_.md) › [TypeReference](_type_reference_.typereference.md)

# Interface: TypeReference

## Hierarchy

* [Function](_type_reference_.typereference.md#function)

  ↳ **TypeReference**

  ↳ [ClassReference](_class_reference_.classreference.md)

## Index

### Properties

* [Function](_type_reference_.typereference.md#function)
* [__tsdi__](_type_reference_.typereference.md#optional-__tsdi__)
* [arguments](_type_reference_.typereference.md#arguments)
* [caller](_type_reference_.typereference.md#caller)
* [length](_type_reference_.typereference.md#readonly-length)
* [name](_type_reference_.typereference.md#readonly-name)
* [prototype](_type_reference_.typereference.md#prototype)

### Methods

* [[Symbol.hasInstance]](_type_reference_.typereference.md#[symbol.hasinstance])
* [apply](_type_reference_.typereference.md#apply)
* [bind](_type_reference_.typereference.md#bind)
* [call](_type_reference_.typereference.md#call)
* [toString](_type_reference_.typereference.md#tostring)

## Properties

###  Function

• **Function**: *FunctionConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:316

___

### `Optional` __tsdi__

• **__tsdi__**? : *[DependencyMetadata](../modules/_dependency_metadata_.md#dependencymetadata)*

*Defined in [lib/type-reference.ts:5](https://github.com/DavidVollmers/typescript-dependency-injection/blob/33f18a4/packages/tsdi/lib/type-reference.ts#L5)*

___

###  arguments

• **arguments**: *any*

*Inherited from [TypeReference](_type_reference_.typereference.md).[arguments](_type_reference_.typereference.md#arguments)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:302

___

###  caller

• **caller**: *[Function](_type_reference_.typereference.md#function)*

*Inherited from [TypeReference](_type_reference_.typereference.md).[caller](_type_reference_.typereference.md#caller)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:303

___

### `Readonly` length

• **length**: *number*

*Inherited from [TypeReference](_type_reference_.typereference.md).[length](_type_reference_.typereference.md#readonly-length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:299

___

### `Readonly` name

• **name**: *string*

*Inherited from [TypeReference](_type_reference_.typereference.md).[name](_type_reference_.typereference.md#readonly-name)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:97

Returns the name of the function. Function names are read-only and can not be changed.

___

###  prototype

• **prototype**: *any*

*Inherited from [TypeReference](_type_reference_.typereference.md).[prototype](_type_reference_.typereference.md#prototype)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

###  [Symbol.hasInstance]

▸ **[Symbol.hasInstance]**(`value`: any): *boolean*

*Inherited from [TypeReference](_type_reference_.typereference.md).[[Symbol.hasInstance]](_type_reference_.typereference.md#[symbol.hasinstance])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:157

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  apply

▸ **apply**(`this`: [Function](_type_reference_.typereference.md#function), `thisArg`: any, `argArray?`: any): *any*

*Inherited from [TypeReference](_type_reference_.typereference.md).[apply](_type_reference_.typereference.md#apply)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:278

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [Function](_type_reference_.typereference.md#function) | - |
`thisArg` | any | The object to be used as the this object. |
`argArray?` | any | A set of arguments to be passed to the function.  |

**Returns:** *any*

___

###  bind

▸ **bind**(`this`: [Function](_type_reference_.typereference.md#function), `thisArg`: any, ...`argArray`: any[]): *any*

*Inherited from [TypeReference](_type_reference_.typereference.md).[bind](_type_reference_.typereference.md#bind)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:293

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [Function](_type_reference_.typereference.md#function) | - |
`thisArg` | any | An object to which the this keyword can refer inside the new function. |
`...argArray` | any[] | A list of arguments to be passed to the new function.  |

**Returns:** *any*

___

###  call

▸ **call**(`this`: [Function](_type_reference_.typereference.md#function), `thisArg`: any, ...`argArray`: any[]): *any*

*Inherited from [TypeReference](_type_reference_.typereference.md).[call](_type_reference_.typereference.md#call)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:285

Calls a method of an object, substituting another object for the current object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [Function](_type_reference_.typereference.md#function) | - |
`thisArg` | any | The object to be used as the current object. |
`...argArray` | any[] | A list of arguments to be passed to the method.  |

**Returns:** *any*

___

###  toString

▸ **toString**(): *string*

*Inherited from [TypeReference](_type_reference_.typereference.md).[toString](_type_reference_.typereference.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** *string*
