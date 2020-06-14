import {AbstractTestService} from './abstract-test-service'

export class TestService extends AbstractTestService
{
  public get constructorEcho (): string
  {
    return this._constructorInput
  }

  public constructor ( private readonly _constructorInput?: string )
  {
    super()
  }

  public echo ( input: string ): string
  {
    return input
  }
}