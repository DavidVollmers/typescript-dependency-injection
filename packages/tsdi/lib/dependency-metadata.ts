export enum DependencyInjectionBehaviour
{
  Transient,
  Scoped,
  Singleton
}

export type DependencyMetadata = {
  key?: string
  injectionBehaviour?: DependencyInjectionBehaviour
}
