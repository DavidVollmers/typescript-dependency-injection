import _Vue, {PluginFunction} from 'vue'
import {DependencyContainer}  from '@dvolper/tsdi'

export interface VueJSPluginOptions {
    readonly builder: ( dc: DependencyContainer ) => void
}

export const VueJSPlugin: PluginFunction<VueJSPluginOptions> = function ( Vue: typeof _Vue, options?: VueJSPluginOptions ): void {
    _Vue.mixin( {
        beforeMount() {
            const dc = new DependencyContainer
            if( options && options.builder ) {
                options.builder( dc )
            }
            dc.resolve( this )
        }
    } )
}
