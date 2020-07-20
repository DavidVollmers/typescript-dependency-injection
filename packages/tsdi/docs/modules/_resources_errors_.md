[@dvolper/tsdi](../README.md) › [Globals](../globals.md) › ["resources/errors"](_resources_errors_.md)

# Module: "resources/errors"

## Index

### Functions

* [InvalidArgumentError](_resources_errors_.md#invalidargumenterror)
* [MissingArgumentError](_resources_errors_.md#missingargumenterror)

## Functions

###  InvalidArgumentError

▸ **InvalidArgumentError**(`argument`: string, `mustBe`: string, `location`: string): *string*

*Defined in [lib/resources/errors.ts:7](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b0a5e90/packages/tsdi/lib/resources/errors.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`argument` | string |
`mustBe` | string |
`location` | string |

**Returns:** *string*

___

###  MissingArgumentError

▸ **MissingArgumentError**(`argument`: string, `location`: string): *string*

*Defined in [lib/resources/errors.ts:1](https://github.com/DavidVollmers/typescript-dependency-injection/blob/b0a5e90/packages/tsdi/lib/resources/errors.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`argument` | string |
`location` | string |

**Returns:** *string*
