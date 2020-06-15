import {TypeReference}             from '../type-reference'
import {DependencyContainer}       from '../dependency-container'
import {ResolveDecoratorExtension} from '../extensions/resolve-decorator-extension'

export const Resolve = ( target: any,
                         propertyKey?: string ): void => {
  let type: TypeReference = target
  if( target.constructor !== Function ) {
    type = target.constructor
    if( !type.__tsdi__ ) type.__tsdi__ = {}
    if( !type.__tsdi__.resolve ) type.__tsdi__.resolve = {}
    if( !type.__tsdi__.resolve.properties ) type.__tsdi__.resolve.properties = {}
    const metadata                                  = Reflect.getMetadata( 'design:type',
                                                                           target,
                                                                           propertyKey )
    type.__tsdi__.resolve.properties[ propertyKey ] = metadata
    const extensions                                = DependencyContainer.global.abstract<ResolveDecoratorExtension>( ResolveDecoratorExtension )
    for( const extension of extensions ) {
      extension.resolve( type,
                         propertyKey,
                         metadata )
    }
  }
}