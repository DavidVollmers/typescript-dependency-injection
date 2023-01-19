export function MissingArgumentError ( argument: string,
                                       location: string ): string
{
  return `[@dvolper/tsdi]: Missing argument "${argument}" in ${location}.`
}

export function InvalidArgumentError ( argument: string,
                                       mustBe: string,
                                       location: string )
{
  return `[@dvolper/tsdi]: Invalid argument "${argument}" in ${location}. Argument must be ${mustBe}.`
}