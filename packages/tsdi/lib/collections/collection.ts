export interface Collection<TType>
{
  [ Symbol.iterator ] (): Generator<TType, any, TType>

  count (): number

  toArray (): TType[]
}