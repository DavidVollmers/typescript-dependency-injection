import {TypeReference}                from '../type-reference'
import {DependencyInjectionBehaviour} from '../dependency-metadata'

export const Scoped = ( target: TypeReference ): void => {
  if( !target.__tsdi__ ) target.__tsdi__ = {}
  target.__tsdi__.injectionBehaviour = DependencyInjectionBehaviour.Scoped
}