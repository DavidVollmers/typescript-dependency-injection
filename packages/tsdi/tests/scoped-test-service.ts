import {AbstractTestService} from './abstract-test-service'
import {Scoped}              from '../lib/decorators/scoped'

@Scoped
export class ScopedTestService extends AbstractTestService
{
}