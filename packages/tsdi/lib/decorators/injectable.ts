import {TypeReference}                from '../type-reference'

export const Injectable = ( target: TypeReference ): void => {
  if( !target.__tsdi__ ) target.__tsdi__ = {}
}