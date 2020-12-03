import 'reflect-metadata'
import {TypeReference} from '../type-reference'

export const Resolve = ( target: any,
                         propertyKey?: string ): void => {
  let type: TypeReference = target
  if( target.constructor !== Function ) {
    type = target.constructor
    if( !type.__tsdi__ ) type.__tsdi__ = {}
    if( !type.__tsdi__.resolve ) type.__tsdi__.resolve = {}
    if( !type.__tsdi__.resolve.properties ) type.__tsdi__.resolve.properties = {}
    type.__tsdi__.resolve.properties[ propertyKey ] = Reflect.getMetadata( 'design:type',
                                                                           target,
                                                                           propertyKey )
  }
}