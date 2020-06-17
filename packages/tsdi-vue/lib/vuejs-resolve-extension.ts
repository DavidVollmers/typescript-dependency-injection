import {ResolveExtension, DependencyContainer} from '@dvolper/tsdi'

// This is needed for VueJS async? child components
export class VueJSResolveExtension extends ResolveExtension {
    public resolve<TDependency extends object>( dc: DependencyContainer,  dependency: TDependency ): TDependency {
        const creator: any = dependency.constructor
        if (creator.superOptions
            && creator.superOptions._base
            && creator.superOptions._base.__tsdi__
            && creator.superOptions._base.__tsdi__.resolve
            && creator.superOptions._base.__tsdi__.resolve.properties) {
            for( const propertyKey of Object.keys( creator.superOptions._base.__tsdi__.resolve.properties ) ) {
                if ( (<any>dependency)[propertyKey] ) continue
                const propertyType = creator.superOptions._base.__tsdi__.resolve.properties[ propertyKey ]
                Object.defineProperty( dependency,
                    propertyKey,
                    {
                        get: ( target => {
                            let instance: any = null
                            return () => {
                                if( !instance ) instance = dc.serve( target )
                                return instance
                            }
                        } )( propertyType ),
                    } )
            }
        }
        return dependency
    }
}