import {TypeReference}             from '../type-reference'
import {DependencyContainer}       from '../dependency-container'
import {ResolveDecoratorExtension} from '../extensions/resolve-decorator-extension'

export const Resolve = ( target: TypeReference,
                         propertyKey?: string ): void => {
  if( !propertyKey ) return
  if( !target.__tsdi__ ) target.__tsdi__ = {}
  if( !target.__tsdi__.resolve ) target.__tsdi__.resolve = {}
  if( !target.__tsdi__.resolve.properties ) target.__tsdi__.resolve.properties = {}
  const metadata                                    = Reflect.getMetadata( 'design:type',
                                                                           target,
                                                                           propertyKey )
  target.__tsdi__.resolve.properties[ propertyKey ] = metadata
  const extensions                                  = DependencyContainer.global.abstract<ResolveDecoratorExtension>( ResolveDecoratorExtension )
  for( const extension of extensions ) {
    extension.resolve( target,
                       propertyKey,
                       metadata )
  }
}