import {Resolve}     from '../lib/decorators/resolve'
import {TestService} from './test-service'

@Resolve
export class ConstructorMetadataTestService
{
  public get constructorEcho (): string
  {
    return this._testService.constructorEcho
  }

  public constructor ( private readonly _testService: TestService ) {}

  public echo ( input: string ): string
  {
    return this._testService.echo( input )
  }
}