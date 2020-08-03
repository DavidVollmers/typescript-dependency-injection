[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["class-reference"](../modules/_class_reference_.md) › [ClassReference](_class_reference_.classreference.md)

# Interface: ClassReference ‹**TType**›

## Type parameters

▪ **TType**: *object*

## Hierarchy

  ↳ [TypeReference](_type_reference_.typereference.md)

  ↳ **ClassReference**

## Index

### Constructors

* [constructor](_class_reference_.classreference.md#constructor)

### Properties

* [__tsdi__](_class_reference_.classreference.md#optional-__tsdi__)
* [arguments](_class_reference_.classreference.md#arguments)
* [caller](_class_reference_.classreference.md#caller)
* [length](_class_reference_.classreference.md#readonly-length)
* [prototype](_class_reference_.classreference.md#prototype)

### Methods

* [apply](_class_reference_.classreference.md#apply)
* [bind](_class_reference_.classreference.md#bind)
* [call](_class_reference_.classreference.md#call)
* [toString](_class_reference_.classreference.md#tostring)

## Constructors

###  constructor

\+ **new ClassReference**(...`args`: any[]): *TType*

*Defined in [lib/class-reference.ts:4](https://github.com/DavidVollmers/typescript-dependency-injection/blob/7e05792/packages/tsdi/lib/class-reference.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *TType*

## Properties

### `Optional` __tsdi__

• **__tsdi__**? : *[DependencyMetadata](../modules/_dependency_metadata_.md#dependencymetadata)*

*Inherited from [TypeReference](_type_reference_.typereference.md).[__tsdi__](_type_reference_.typereference.md#optional-__tsdi__)*

*Defined in [lib/type-reference.ts:5](https://github.com/DavidVollmers/typescript-dependency-injection/blob/7e05792/packages/tsdi/lib/type-reference.ts#L5)*

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

###  prototype

• **prototype**: *any*

*Inherited from [TypeReference](_type_reference_.typereference.md).[prototype](_type_reference_.typereference.md#prototype)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

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
