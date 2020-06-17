# `@dvolper/tsdi`
# TypeScript Dependency Injection

Lightweight, extendable and easy to use Dependency Injection for TypeScript.

## Usage

Install the package
```bash
npm i @dvolper/tsdi
```

Install reflect-metadata
```bash
npm i -D reflect-metadata
```

Update your tsconfig.json
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "downlevelIteration": true
  }
}
```

After that there are different ways on how to initialize the Dependency Injection. Notice that you always need an `
import 'reflect-metadata'` in your entry file.

### VueJS Initialization

For VueJS Support you will also need to install the VueJS Plugin package:
```bash
npm i @dvolper/tsdi-vue
```

Then update your main.ts
```ts
import 'reflect-metadata'
import Vue from 'vue'
import TypeScriptDependencyInjection from '@dvolper/tsdi-vue'
import {Store} from 'vuex'
import store from './store'

Vue.use( TypeScriptDependencyInjection, {
    // Optional
    builder: dc => {
        // Make the Vuex Store injectable
        dc.add( Store, () => store )
    }
} )
```

Then inside any component you can use the following setup
```ts
import Vue from 'vue'
import {Resolve} from '@dvolper/tsdi'
import {Component} from 'vue-property-decorator'
import {FooService} from '@/services/foo-service'

@Component
export default class FooComponent extends Vue {
  
    @Resolve
    private readonly _fooService: FooService
    
    // Optional
    public beforeMount(): void {
        this.$di.add( FooService )
    }
}
```

### Dependencies for Dependencies

Whenever a dependency will be created or resolved using [`DependencyContainer::serve`](packages/tsdi/docs/classes/_dependency_container_.dependencycontainer.md#serve) or [`@Resolve`](packages/tsdi/docs/modules/_decorators_resolve_.md#const-resolve) the dependencies of this dependency will automatically be resolved.

This also counts for constructor arguments of an injectable class:

Service `FooService` will be used as dependency
```ts
import {Injectable} from '@dvolper/tsdi'

// If you do not need @Resolve you should atleast use @Injectable
// Or you can do dc.add(FooService) when initializing your DependencyContainer
// Without adding or marking a class, it cannot be resolved as a dependency...
@Injectable
export class FooService {

    public foo(): void {
        console.log('foo')
    }

}
```

And then `FooService` will be required by `BarService`
```ts
import {Resolve} from '@dvolper/tsdi'
import {FooService} from './foo-service'

@Resolve
export class BarService {
    
    public  constructor( private readonly _fooService: FooService ) {

    }

    public bar(): void {
        this._fooService.foo()
        
        console.log('bar')
    }

}
```

Executing the following...
```ts
import 'reflect-metadata'
import {DependencyContainer} from '@dvolper/tsdi'
import {BarService} from './services/bar-service'

// create a new dependency container
const dc = new DependencyContainer

// create an instance of the registered dependency
const barService = dc.serve( BarService )

barService.bar()
```

...this output will be generated:
```bash
foo
bar
```

### Manual Initialization

```ts
import 'reflect-metadata'
import {DependencyContainer} from '@dvolper/tsdi'
import {FooService} from './services/foo-service'

// create a new dependency container
const dc = new DependencyContainer

// create an instance of the dependency (does not need to be registered)
const instance = dc.serve( FooService )
```

## Extended Usage

The Dependency Injection is far more powerful than what you have seen before.
In the following you will see the core features explained but you can find a complete API documentation [here](packages/tsdi/docs/globals.md).

### Transient, Scoped and Singleton

Each Dependency will be injected in style of one of the following behaviours:

#### Transient

The default injection behaviour. This means whenever an instance of the dependency is required, a new one will be served.

#### Scoped

All dependencies marked as [`@Scoped`](packages/tsdi/docs/modules/_decorators_scoped_.md#const-scoped).

Per default this behaviour is the same as **Transient**. Only when using [`DependencyContainer::useScope`](packages/tsdi/docs/classes/_dependency_container_.dependencycontainer.md#usescope) it will have an effect:
Whenever an instance of the dependency is required, a new one **per new scope** will be served.

#### Singleton

All dependencies marked as [`@Singleton`](packages/tsdi/docs/modules/_decorators_singleton_.md#const-singleton).

This means whenever an instance of the dependency is required, **the same one** will be served.

### Injection by Abstraction

When having injectable classes which derive from others or when adding dependencies with an abstraction...
```ts
import {DependencyContainer} from '@dvolper/tsdi'
import {AbstractFooService} from './abstractions/foo-service'
import {FooService} from './services/foo-service'

const dc = new DependencyContainer

// Optional (Only needed if FooService does not "really" implement AbstractFooService, e.g. if it is a Mock)
dc.add( AbstractFooService, FooService )
``` 

...you can resolve dependencies by that abstraction:
```ts
// query the DependencyContainer by an abstraction (the <AbstractFooService> type hint is needed or else instance will be of type Object)
const query = dc.abstract<AbstractFooService>( AbstractFooService )

// lazy load an instance which implements the required abstraction
const instance = query.single()
```

You can read more about Abstract Queries [here](packages/tsdi/docs/classes/_dependency_container_.dependencycontainer.md#abstract).
