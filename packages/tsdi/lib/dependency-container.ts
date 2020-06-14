import {DependencyCreator}                          from './dependency-creator'
import {InvalidArgumentError, MissingArgumentError} from './resources/errors'
import {AbstractDependency}                         from './abstract-dependency'
import {DependencyProvider}                         from './dependency-provider'
import {DependencyQuery}                            from './collections/dependency-query'

export class DependencyContainer
{
  public add<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction> | DependencyCreator<TDependency>,
                                                                                       implementation?: DependencyCreator<TDependency> | DependencyProvider<TDependency>,
                                                                                       provider?: DependencyProvider<TDependency> ): DependencyContainer
  {
    return this
  }

  public addScoped<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction> | DependencyCreator<TDependency>,
                                                                                             implementation?: DependencyCreator<TDependency> | DependencyProvider<TDependency>,
                                                                                             provider?: DependencyProvider<TDependency> ): DependencyContainer
  {
    return this.add( abstraction,
                     implementation,
                     provider )
  }

  public addSingleton<TDependency extends TAbstraction, TAbstraction extends object = object> ( abstraction: AbstractDependency<TAbstraction> | DependencyCreator<TDependency>,
                                                                                                implementation?: DependencyCreator<TDependency> | DependencyProvider<TDependency>,
                                                                                                provider?: DependencyProvider<TDependency> ): DependencyContainer
  {
    return this.add( abstraction,
                     implementation,
                     provider )
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
}