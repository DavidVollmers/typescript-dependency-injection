export abstract class AbstractTestService
{
  public get constructorEcho (): string
  {
    return this._constructorInput
  }

  public constructor ( private readonly _constructorInput?: string )
  {
  }

  public echo ( input: string ): string
  {
    return input
  }
}