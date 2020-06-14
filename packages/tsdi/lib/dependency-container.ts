import {DependencyCreator}                          from './dependency-creator'
import {InvalidArgumentError, MissingArgumentError} from './resources/errors'
import {AbstractDependency}                         from './abstract-dependency'
import {DependencyProvider}                         from './dependency-provider'
import {DependencyQuery}                            from './collections/dependency-query'
import {DependencyKeyGenerator}                     from './extensions/dependency-key-generator'
import {TypeReference}                              from './type-reference'

interface RegisteredDependency<TDependency extends object>
{
  readonly dependency: DependencyCreator<TDependency>
  readonly provider?: DependencyProvider<TDependency>
}

export class DependencyContainer
{
  private readonly _registeredDependencies: {
    [ key: string ]: RegisteredDependency<any>
  } = {}
  private readonly _abstractionMapping: {
    [ key: string ]: string[]
  } = {}

  private verifyMetadata ( target: TypeReference ): void
  {
    if( !target.__tsdi__ ) target.__tsdi__ = {}
    const extensions = this.abstract<DependencyKeyGenerator>( DependencyKeyGenerator )
    for( const extension of extensions ) {
      extension.verify( target )
    }
    const keyGen = this.create( DependencyKeyGenerator )
    keyGen.verify( target )
  }

  public add<TDependency extends object> ( dependency: DependencyCreator<TDependency>,
                                           provider?: DependencyProvider<TDependency> ): DependencyContainer
  public add<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction>,
                                                                                       implementation: DependencyCreator<TDependency>,
                                                                                       provider?: DependencyProvider<TDependency> ): DependencyContainer
  public add<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction> | DependencyCreator<TDependency>,
                                                                                       implementation?: DependencyCreator<TDependency> | DependencyProvider<TDependency>,
                                                                                       provider?: DependencyProvider<TDependency> ): DependencyContainer
  {
    let abstr: AbstractDependency<TAbstraction>
    let dependency: DependencyCreator<TDependency>
    if( provider && typeof provider !== 'function' ) {
      throw new Error( InvalidArgumentError( 'provider',
                                             'of type Function',
                                             'DependencyContainer::add' ) )
    }
    if( implementation ) {
      if( typeof implementation !== 'function' ) {
        throw new Error( InvalidArgumentError( 'implementation',
                                               'of type Function',
                                               'DependencyContainer::add' ) )
      }
      if( implementation.name === '' ) {
        if( !provider ) {
          provider = <DependencyProvider<TDependency>>implementation
        }
      }
      else {
        dependency = <DependencyCreator<TDependency>>implementation
        if( !abstraction ) {
          throw new Error( MissingArgumentError( 'abstraction',
                                                 'DependencyContainer::add' ) )
        }
        if( typeof abstraction !== 'function' ) {
          throw new Error( InvalidArgumentError( 'abstraction',
                                                 'of type Function',
                                                 'DependencyContainer::add' ) )
        }
        abstr = <AbstractDependency<TAbstraction>>abstraction
      }
    }
    else if( provider ) {
      throw new Error( MissingArgumentError( 'implementation',
                                             'DependencyContainer::add' ) )
    }
    if( !dependency ) {
      if( !abstraction ) {
        throw new Error( MissingArgumentError( 'dependency',
                                               'DependencyContainer::add' ) )
      }
      if( typeof abstraction !== 'function' ) {
        throw new Error( InvalidArgumentError( 'dependency',
                                               'of type Function',
                                               'DependencyContainer::add' ) )
      }
      dependency = <DependencyCreator<TDependency>>abstraction
    }
    this.verifyMetadata( dependency )
    if( abstr ) this.verifyMetadata( abstr )
    if( this._registeredDependencies[ dependency.__tsdi__.key ] ) {
      throw new Error( 'Cannot register dependency with same key twice: ' + dependency.__tsdi__.key )
    }
    this._registeredDependencies[ dependency.__tsdi__.key ] = {
      dependency,
      provider,
    }
    if( abstr ) {
      if( !this._abstractionMapping[ abstr.__tsdi__.key ] ) this._abstractionMapping[ abstr.__tsdi__.key ] = []
      this._abstractionMapping[ abstr.__tsdi__.key ].push( dependency.__tsdi__.key )
    }
    return this
  }

  public abstract<TAbstraction extends object> ( abstraction: AbstractDependency<TAbstraction>,
                                                 ...args: any[] ): DependencyQuery<TAbstraction>
  {
    return new DependencyQuery( this,
                                [],
                                args )
  }

  public create<TDependency extends object> ( dependency: DependencyCreator<TDependency>,
                                              ...args: any[] ): TDependency
  {
    if( !dependency ) {
      throw new Error( MissingArgumentError( 'dependency',
                                             'DependencyContainer::create' ) )
    }
    if( typeof dependency !== 'function' ) {
      throw new Error( InvalidArgumentError( 'dependency',
                                             'of type Function',
                                             'DependencyContainer::create' ) )
    }
    const instance = new dependency()
    return this.resolve( instance )
  }

  public resolve<TDependency extends object> ( dependency: TDependency ): TDependency
  {
    return dependency
  }

  public query (): DependencyQuery<any>
  {
    return new DependencyQuery( this,
                                [],
                                [] )
  }
}