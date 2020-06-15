import {AbstractTestService} from './abstract-test-service'
import {Singleton}           from '../lib/decorators/singleton'

@Singleton
export class SingletonTestService extends AbstractTestService
{
}