import {Resolve}     from '../lib/decorators/resolve'
import {TestService} from './test-service'

export class PropertyMetadataTestService
{
  @Resolve
  private readonly _testService: TestService

  public get constructorEcho (): string
  {
    return this._testService.constructorEcho
  }

  public echo ( input: string ): string
  {
    return this._testService.echo( input )
  }
}