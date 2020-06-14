import {DependencyMetadata} from './dependency-metadata'

export interface TypeReference extends Function
{
  __tsdi__?: DependencyMetadata
}
