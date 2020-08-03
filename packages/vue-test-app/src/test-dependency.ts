import {Singleton} from '@dvolper/tsdi'

@Singleton
export class TestDependency {
    public test(): string {
        return 'Hello World!'
    }
}