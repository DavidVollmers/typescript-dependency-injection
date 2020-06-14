import {TypeReference} from './type-reference'

export interface ClassReference<TType extends object> extends TypeReference
{
  new ( ...args: any[] ): TType
}
