import _Vue, {PluginFunction}  from 'vue'
import {DependencyContainer}   from '@dvolper/tsdi'
import {VueJSResolveExtension} from './vuejs-resolve-extension'

export interface VueJSPluginOptions
{
  readonly builder: ( dc: DependencyContainer ) => void
}

export const VueJSPlugin: PluginFunction<VueJSPluginOptions> = function ( Vue: typeof _Vue,
                                                                          options?: VueJSPluginOptions ): void {
    Vue.mixin( {
               beforeMount ()
               {
                 const dc = new DependencyContainer
                 dc.add( VueJSResolveExtension )
                 if( options && options.builder ) {
                   options.builder( dc )
                 }
                 dc.resolve( this )
               },
             } )
}
