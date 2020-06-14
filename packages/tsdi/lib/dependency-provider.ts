import {DependencyContainer} from './dependency-container'

export type DependencyProvider<TDependency extends object> = ( dc?: DependencyContainer ) => TDependency