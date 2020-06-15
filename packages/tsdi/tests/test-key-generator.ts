import {DependencyKeyGenerator} from '../lib/extensions/dependency-key-generator'
import {TypeReference}          from '../lib/type-reference'

export class TestKeyGenerator extends DependencyKeyGenerator
{
  public verify ( target: TypeReference )
  {
    target.__tsdi__.key = target.__tsdi__.key + this._input
  }

  public constructor ( private readonly _input: string = '' )
  {
    super()
  }
}