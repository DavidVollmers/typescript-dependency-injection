import {DependencyKeyGenerator} from '../lib/extensions/dependency-key-generator'
import {DependencyMetadata}     from '../lib/dependency-metadata'

export class UnverifiedKeyGenerator extends DependencyKeyGenerator
{
  public static get __tsdi__ (): DependencyMetadata
  {
    return null
  }
}