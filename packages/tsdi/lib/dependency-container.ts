import 'reflect-metadata'
import {DependencyCreator}                                           from './dependency-creator'
import {AbstractDependency}                                          from './abstract-dependency'
import {DependencyProvider}                                          from './dependency-provider'
import {DependencyQuery}                                             from './collections/dependency-query'
import {DependencyKeyGenerator}                                      from './extensions/dependency-key-generator'
import {TypeReference}                                               from './type-reference'
import {DependencyInjectionBehaviour}                                from './dependency-metadata'
import {ResolveExtension}                                            from './extensions/resolve-extension'
import {AsyncDisposable, InvalidArgumentError, MissingArgumentError} from '@dvolper/ts-system'

export enum ServingBehaviour
{
  Lazy,
  Greedy
}

interface RegisteredDependency<TDependency extends object>
{
  readonly dependency: DependencyCreator<TDependency>
  readonly provider?: DependencyProvider<TDependency>
}

/**
 * Resembles the entry point for any dependency injection.
 * Each instance has its own dependency and instance cache.
 * Only dependencies marked with `@Singleton` are globally unique.
 */
export class DependencyContainer implements AsyncDisposable
{
  private static readonly _globalInstance: DependencyContainer = new DependencyContainer( 'global' )
  private readonly _registeredDependencies: {
    [ key: string ]: RegisteredDependency<any>
  }                                                            = {}
  private readonly _abstractionMapping: {
    [ key: string ]: string[]
  }                                                            = {}
  private readonly _singletonInstances: {
    [ key: string ]: any
  }                                                            = {}
  private readonly _scopedInstances: {
    [ key: string ]: any
  }                                                            = {}
  private _currentScope?: string
  public servingBehaviour: ServingBehaviour                    = ServingBehaviour.Greedy

  /**
   * Do not use the global instance to add dependencies!
   * Every dependency added to any DependencyContainer instance will also be cached globally.
   * This means whenever you do not have access to a specific DependencyContainer instance you can try resolving dependencies via
   * `DependencyContainer.global.create` or `DependencyContainer.global.resolve`.
   *
   * @returns The global DependencyContainer instance
   */
  public static get global (): DependencyContainer
  {
    return this._globalInstance
  }

  /**
   * @param scope - If specified the instance will directly use the specific scope. (See `DependencyContainer::useScope`)
   */
  public constructor ( scope?: string )
  {
    if( scope ) {
      this.useScope( scope )
    }
  }

  /**
   * Adds a dependency to the DependencyContainer cache and marks it as `@Injectable`.
   *
   * @param dependency - The dependency to be injected
   * @param provider - Optional dependency provider callback (Can be used to override the dependency creation behaviour)
   * @returns The DependencyContainer instance itself (for chaining .add calls)
   */
  public add<TDependency extends object> ( dependency: DependencyCreator<TDependency>,
                                           provider?: DependencyProvider<TDependency> ): DependencyContainer
  /**
   * Adds a dependency as an implementation of an abstraction to the DependencyContainer cache and marks it as `@Injectable`.
   * When mapping a dependency to an abstraction it is possible to query it based on the abstraction later on. (See `DependencyContainer::abstract`)
   *
   * @param abstraction - The abstraction of the dependency
   * @param implementation - The implementation of the specified abstraction
   * @param provider - Optional dependency provider callback (Can be used to override the dependency creation behaviour)
   * @returns The DependencyContainer instance itself (for chaining .add calls)
   */
  public add<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction>,
                                                                                       implementation: DependencyCreator<TDependency>,
                                                                                       provider?: DependencyProvider<TDependency> ): DependencyContainer
  public add<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction> | DependencyCreator<TDependency>,
                                                                                       implementation?: DependencyCreator<TDependency> | DependencyProvider<TDependency>,
                                                                                       provider?: DependencyProvider<TDependency> ): DependencyContainer
  {
    if( this._currentScope !== 'global' ) {
      DependencyContainer._globalInstance.add( abstraction,
                                               <any>implementation,
                                               provider )
    }
    let abstr: AbstractDependency<TAbstraction>
    let dependency: DependencyCreator<TDependency>
    if( provider && typeof provider !== 'function' ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'provider',
                                      'be of type Function',
                                      '[@dvolper/tsdi]::DependencyContainer::add' )
    }
    if( implementation ) {
      if( typeof implementation !== 'function' ) {
        throw new InvalidArgumentError( '@dvolper/tsdi',
                                        'implementation',
                                        'be of type Function',
                                        '[@dvolper/tsdi]::DependencyContainer::add' )
      }
      if( implementation.name === '' ) {
        if( !provider ) {
          provider = <DependencyProvider<TDependency>>implementation
        }
      }
      else {
        dependency = <DependencyCreator<TDependency>>implementation
        if( !abstraction ) {
          throw new MissingArgumentError( '@dvolper/tsdi',
                                          'abstraction',
                                          '[@dvolper/tsdi]::DependencyContainer::add' )
        }
        if( typeof abstraction !== 'function' ) {
          throw new InvalidArgumentError( '@dvolper/tsdi',
                                          'abstraction',
                                          'be of type Function',
                                          '[@dvolper/tsdi]::DependencyContainer::add' )
        }
        abstr = <AbstractDependency<TAbstraction>>abstraction
      }
    }
    else if( provider ) {
      throw new MissingArgumentError( '@dvolper/tsdi',
                                      'implementation',
                                      '[@dvolper/tsdi]::DependencyContainer::add' )
    }
    if( !dependency ) {
      if( !abstraction ) {
        throw new MissingArgumentError( '@dvolper/tsdi',
                                        'dependency',
                                        '[@dvolper/tsdi]::DependencyContainer::add' )
      }
      if( typeof abstraction !== 'function' ) {
        throw new InvalidArgumentError( '@dvolper/tsdi',
                                        'dependency',
                                        'be of type Function',
                                        '[@dvolper/tsdi]::DependencyContainer::add' )
      }
      dependency = <DependencyCreator<TDependency>>abstraction
    }
    this.verifyMetadata( dependency )
    if( abstr && abstr !== dependency ) this.verifyMetadata( abstr )
    if( this._registeredDependencies[ dependency.__tsdi__.key ] ) {
      if( this._currentScope === 'global' ) return this
      throw new Error( 'Cannot register dependency with same key twice: ' + dependency.__tsdi__.key )
    }
    this._registeredDependencies[ dependency.__tsdi__.key ] = {
      dependency,
      provider,
    }
    if( abstr && abstr !== dependency ) {
      if( !this._abstractionMapping[ abstr.__tsdi__.key ] ) this._abstractionMapping[ abstr.__tsdi__.key ] = []
      this._abstractionMapping[ abstr.__tsdi__.key ].push( dependency.__tsdi__.key )
    }
    return this
  }

  /**
   * Queries the DependencyContainer cache based on a specified abstraction.
   *
   * @param abstraction - The abstraction which will be used to query the dependency cache
   * @param args - Optional arguments used to create dependency instances later on (See `DependencyContainer::serve`)
   * @returns The DependencyQuery containing all cached implementations of the specified abstraction (See `DependencyQuery`)
   */
  public abstract<TAbstraction extends object> ( abstraction: AbstractDependency<TAbstraction>,
                                                 ...args: any[] ): DependencyQuery<TAbstraction>
  {
    if( !abstraction ) {
      throw new MissingArgumentError( '@dvolper/tsdi',
                                      'abstraction',
                                      '[@dvolper/tsdi]::DependencyContainer::abstract' )
    }
    if( typeof abstraction !== 'function' ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'abstraction',
                                      'be of type Function',
                                      '[@dvolper/tsdi]::DependencyContainer::abstract' )
    }
    if( !Array.isArray( args ) ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'args',
                                      'be an Array',
                                      '[@dvolper/tsdi]::DependencyContainer::abstract' )
    }
    const dependencies: DependencyCreator<TAbstraction>[] = []
    for( const key of Object.keys( this._registeredDependencies ) ) {
      const dependency = this._registeredDependencies[ key ].dependency
      if( DependencyContainer.isPrototypeAssignableFrom( dependency.prototype,
                                                         abstraction ) ) {
        dependencies.push( dependency )
      }
    }
    if( abstraction.__tsdi__ && abstraction.__tsdi__.key && this._abstractionMapping[ abstraction.__tsdi__.key ] ) {
      for( const key of this._abstractionMapping[ abstraction.__tsdi__.key ] ) {
        if( dependencies.filter( d => d.__tsdi__ && d.__tsdi__.key === key ).length ) continue
        dependencies.push( this._registeredDependencies[ key ].dependency )
      }
    }
    return new DependencyQuery( this,
                                dependencies,
                                args )
  }

  /**
   * Serves a resolved instance of the specified dependency. (See `DependencyContainer::resolve`)
   *
   * @param dependency - The specific dependency for which an instance is required
   * @param args - Optional arguments used to create the dependency instance
   * @returns The resolved instance
   * @remarks
   * The constructor arguments of a required dependency will be resolved in the following manner when creating an instance:
   *
   * If no reflection metadata is emitted for the required dependency (No decorator used)
   *
   *  => Only the optional arguments passed to `DependencyContainer::serve` will be used (No type checking possible)
   *
   * Else, the reflection metadata is checked first...
   *
   * If the reflection of an argument is a known dependency (in the current DependencyContainer cache)
   *
   *  => The known dependency will be served
   *
   * If the argument for the same index in the optional arguments passed to `DependencyContainer::serve` matches the type of the reflection
   *
   *  => Use the optional argument
   *
   * If the reflection of an argument is a known abstraction of a dependency (in the current DependencyContainer cache)
   *
   *  => The first found implementation of the known abstraction will be served
   *
   * Else
   *
   *  => `null` will be served (Different to when no reflection metadata is emitted and no optional arguments are passed => `undefined`)
   */
  public serve<TDependency extends object> ( dependency: DependencyCreator<TDependency>,
                                             ...args: any[] ): TDependency
  {
    if( !dependency ) {
      throw new MissingArgumentError( '@dvolper/tsdi',
                                      'dependency',
                                      '[@dvolper/tsdi]::DependencyContainer::create' )
    }
    if( typeof dependency !== 'function' ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'dependency',
                                      'be of type Function',
                                      '[@dvolper/tsdi]::DependencyContainer::create' )
    }
    if( !Array.isArray( args ) ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'args',
                                      'be an Array',
                                      '[@dvolper/tsdi]::DependencyContainer::create' )
    }
    if( dependency.__tsdi__ ) {
      if( dependency.__tsdi__.injectionBehaviour === DependencyInjectionBehaviour.Singleton
          && DependencyContainer._globalInstance._singletonInstances[ dependency.__tsdi__.key ] ) {
        return DependencyContainer._globalInstance._singletonInstances[ dependency.__tsdi__.key ]
      }
      if( dependency.__tsdi__.injectionBehaviour === DependencyInjectionBehaviour.Scoped
          && this._currentScope && this._scopedInstances[ dependency.__tsdi__.key ] ) {
        return this._scopedInstances[ dependency.__tsdi__.key ]
      }
      const registered = this._registeredDependencies[ dependency.__tsdi__.key ]
      if( registered && registered.provider ) {
        return registered.provider( this )
      }
    }
    const creationArguments = this.resolveCreationArguments( dependency,
                                                             args )
    const instance          = new dependency( ...creationArguments )
    return this.resolve( instance )
  }

  /**
   * Resolves an instance of a dependency.
   *
   * @param dependency - The instance to be resolved
   * @returns The resolved instance
   * @remarks
   * Only properties of an instance marked with `@Resolve` will be resolved.
   * You can extend the default resolve behaviour of any DependencyContainer by adding a derivation of `ResolveExtension` to it:
   * (See `ResolveExtension`)
   * ```ts
   * import {DependencyContainer, ResolveExtension} from '@dvolper/tsdi'
   *
   * class CustomResolveExtension extends ResolveExtension {
   *     public resolve<TDependency extends object> ( dc: DependencyContainer, dependency: TDependency ): TDependency
   *     {
   *         // Custom resolve logic...
   *         return dependency
   *     }
   * }
   *
   * const dc = new DependencyContainer
   * dc.add( CustomResolveExtension )
   *
   * // Whenever .serve or .resolve is called on the extended DependencyContainer the CustomResolveExtension will be triggered.
   * const instance = dc.serve( ... )
   * ```
   */
  public resolve<TDependency extends object> ( dependency: TDependency ): TDependency
  {
    if( !dependency ) {
      throw new MissingArgumentError( '@dvolper/tsdi',
                                      'dependency',
                                      '[@dvolper/tsdi]::DependencyContainer::resolve' )
    }
    if( typeof dependency !== 'object' ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'dependency',
                                      'of type Object',
                                      '[@dvolper/tsdi]::DependencyContainer::resolve' )
    }
    const creator: DependencyCreator<TDependency> = <any>dependency.constructor
    this.verifyMetadata( creator )
    if( !this._registeredDependencies[ creator.__tsdi__.key ] ) {
      this._registeredDependencies[ creator.__tsdi__.key ] = {
        dependency: creator,
      }
    }
    if( creator.__tsdi__.injectionBehaviour === DependencyInjectionBehaviour.Singleton ) {
      DependencyContainer._globalInstance._singletonInstances[ creator.__tsdi__.key ] = dependency
    }
    else if( creator.__tsdi__.injectionBehaviour === DependencyInjectionBehaviour.Scoped
             && this._currentScope ) {
      this._scopedInstances[ creator.__tsdi__.key ] = dependency
    }
    if( creator.__tsdi__.resolve && creator.__tsdi__.resolve.properties ) {
      for( const propertyKey of Object.keys( creator.__tsdi__.resolve.properties ) ) {
        const propertyType = creator.__tsdi__.resolve.properties[ propertyKey ]
        Object.defineProperty( dependency,
                               propertyKey,
                               {
                                 get: ( target => {
                                   let instance: any = null
                                   return () => {
                                     if( !instance ) instance = this.serve( target )
                                     return instance
                                   }
                                 } )( propertyType ),
                               } )
      }
    }
    const extensions = this.abstract<ResolveExtension>( ResolveExtension )
    for( const extension of extensions ) {
      dependency = extension.resolve( this,
                                      dependency )
    }
    return dependency
  }

  /**
   * Queries the DependencyContainer cache.
   *
   * @param args - Optional arguments used to create dependency instances later on (See `DependencyContainer::serve`)
   * @returns The DependencyQuery containing all cached implementations (See `DependencyQuery`)
   */
  public query ( ...args: any[] ): DependencyQuery<any>
  {
    if( !Array.isArray( args ) ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'args',
                                      'be an Array',
                                      '[@dvolper/tsdi]::DependencyContainer::query' )
    }
    const dependencies: DependencyCreator<any>[] = []
    for( const key of Object.keys( this._registeredDependencies ) ) {
      dependencies.push( this._registeredDependencies[ key ].dependency )
    }
    return new DependencyQuery( this,
                                dependencies,
                                args )
  }

  public useScope ( scope: string ): void
  {
    if( !scope ) {
      throw new MissingArgumentError( '@dvolper/tsdi',
                                      'scope',
                                      '[@dvolper/tsdi]::DependencyContainer::useScope' )
    }
    if( typeof scope !== 'string' ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'scope',
                                      'of type String',
                                      '[@dvolper/tsdi]::DependencyContainer::useScope' )
    }
    if( scope === 'global' && DependencyContainer._globalInstance ) {
      throw new Error( '[@dvolper/tsdi]: "global" scope is reserved.' )
    }
    if( this._currentScope ) {
      if( this._currentScope === scope ) return
      throw new Error( '[@dvolper/tsdi]: There is already a scope in use: ' + this._currentScope )
    }
    this._currentScope = scope
  }

  public async exitScope ( scope: string ): Promise<void>
  {
    if( !scope ) {
      throw new MissingArgumentError( '@dvolper/tsdi',
                                      'scope',
                                      '[@dvolper/tsdi]::DependencyContainer::exitScope' )
    }
    if( typeof scope !== 'string' ) {
      throw new InvalidArgumentError( '@dvolper/tsdi',
                                      'scope',
                                      'of type String',
                                      '[@dvolper/tsdi]::DependencyContainer::exitScope' )
    }
    if( scope === 'global' ) {
      throw new Error( '[@dvolper/tsdi]: "global" scope is reserved.' )
    }
    if( this._currentScope !== scope ) return
    await this.disposeCurrentScope()
  }

  public async dispose (): Promise<void>
  {
    if( this._currentScope === 'global' ) throw new Error( '[@dvolper/tsdi]: "global" scope is reserved.' )
    await this.disposeCurrentScope()
    for( const key of Object.keys( this._singletonInstances ) ) {
      const instance = this._singletonInstances[ key ]
      if( typeof instance.dispose === 'function' ) {
        const result = instance.dispose()
        if( result instanceof Promise ) await result
      }
      delete this._singletonInstances[ key ]
    }
    for( const key of Object.keys( this._registeredDependencies ) ) {
      delete this._registeredDependencies[ key ]
    }
  }

  private verifyMetadata ( target: TypeReference ): void
  {
    if( target === DependencyKeyGenerator
        || DependencyContainer.isPrototypeAssignableFrom( target.prototype,
                                                          DependencyKeyGenerator ) ) {
      if( !target.__tsdi__
          || !target.__tsdi__.key ) {
        throw new Error( '[@dvolper/tsdi]: DependencyKeyGenerator must be self verified. (TSDI Key is missing)' )
      }
      return
    }
    if( !target.__tsdi__ ) target.__tsdi__ = {}
    const extensions = this.abstract<DependencyKeyGenerator>( DependencyKeyGenerator )
    for( const extension of extensions ) {
      extension.verify( target )
    }
    const keyGen = this.serve( DependencyKeyGenerator )
    keyGen.verify( target )
    if( !target.__tsdi__.key ) {
      throw new Error( '[@dvolper/tsdi]: Each dependency must be verified by a key. (TSDI Key is missing)' )
    }
  }

  private resolveCreationArguments<TDependency extends object> ( dependency: DependencyCreator<TDependency>,
                                                                 args: any[] ): any[]
  {
    const metadata = Reflect.getMetadata( 'design:paramtypes',
                                          dependency )
    if( metadata && metadata.length ) {
      const creationArguments: any[] = []
      for( let index = 0; index < metadata.length; index++ ) {
        creationArguments.push( this.resolveCreationArgument( metadata[ index ],
                                                              args ) )
      }
      return creationArguments
    }
    else {
      return args
    }
  }

  private resolveCreationArgument ( target: any,
                                    args: any[] ): any
  {
    const type = typeof target
    if( type === 'function' && target.__tsdi__ ) {
      if( this._registeredDependencies[ target.__tsdi__.key ] ) {
        return this.serve( target )
      }
    }
    let resolved = DependencyContainer.resolveTargetByContext( target,
                                                               args )
    if( resolved ) return resolved
    if( type === 'function' && target.__tsdi__ ) {
      const instance = this.abstract( target )
                           .firstOrDefault()
      if( instance ) return instance
      if( this.servingBehaviour === ServingBehaviour.Greedy ) return this.serve( target )
    }
    return null
  }

  private async disposeCurrentScope (): Promise<void>
  {
    for( const key of Object.keys( this._scopedInstances ) ) {
      const instance = this._scopedInstances[ key ]
      if( typeof instance.dispose === 'function' ) {
        const result = instance.dispose()
        if( result instanceof Promise ) await result
      }
      delete this._scopedInstances[ key ]
    }
    delete this._currentScope
  }

  private static resolveTargetByContext ( target: any,
                                          context?: any[] ): any
  {
    if( !context || !context.length ) return null
    const type = typeof target
    for( let index = 0; index < context.length; index++ ) {
      const type2 = typeof context[ index ]
      if( type === type2
          || type2 === 'number' && target === Number
          || type2 === 'string' && target === String
          || type2 === 'boolean' && target === Boolean
          // || type2 === 'bigint' && target === BigInt
          || type2 === 'symbol' && target === Symbol
          || type2 === 'object' && ( target === Object || Array.isArray( target ) )
          || type === 'function' && context[ index ] instanceof target ) {
        const value = context[ index ]
        context.splice( index,
                        1 )
        return value
      }
    }
    return null
  }

  public static isPrototypeAssignableFrom ( prototype: any,
                                            type: TypeReference ): boolean
  {
    if( prototype instanceof type ) return true
    if( prototype.prototype ) {
      return DependencyContainer.isPrototypeAssignableFrom( prototype.prototype,
                                                            type )
    }
    return false
  }
}