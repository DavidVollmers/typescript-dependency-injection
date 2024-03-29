import 'reflect-metadata'
import {DependencyContainer, ServingBehaviour} from '../lib/dependency-container'
import {TestService}                           from './test-service'
import {AbstractTestService}                   from './abstract-test-service'
import {UnverifiedKeyGenerator}                from './unverified-key-generator'
import {TestKeyGenerator}                      from './test-key-generator'
import {DependencyCreator}                     from '../lib/dependency-creator'
import {SingletonTestService}                  from './singleton-test-service'
import {ScopedTestService}                     from './scoped-test-service'
import {ConstructorMetadataTestService}        from './constructor-metadata-test-service'
import {PropertyMetadataTestService}                from './property-metadata-test-service'
import {InvalidArgumentError, MissingArgumentError} from '../lib/resources/errors'

describe( 'DependencyContainer',
          () => {
            let dc: DependencyContainer
            beforeEach( () => {
              dc = new DependencyContainer
            } )
            it( 'Argument validation',
                () => {
                  expect( () => {
                    dc.serve( null )
                  } )
                    .toThrow( MissingArgumentError( 'dependency',
                                                    'DependencyContainer::create' ) )
                  expect( () => {
                    dc.serve( <any>{} )
                  } )
                    .toThrow( InvalidArgumentError( 'dependency',
                                                    'of type Function',
                                                    'DependencyContainer::create' ) )
                } )
            it( 'Create Number',
                () => {
                  const value = dc.serve( Number )
                  expect( value instanceof Number )
                    .toBe( true )
                  expect( value.toString() )
                    .toBe( '0' )
                } )
            it( 'Create TestService and echo "test"',
                () => {
                  const instance = dc.serve( TestService )
                  expect( instance instanceof TestService )
                    .toBe( true )
                  expect( instance.constructorEcho )
                    .toBe( undefined )
                  const input  = 'test'
                  const output = instance.echo( input )
                  expect( output )
                    .toBe( input )
                } )
            it( 'Add TestService with provider',
                () => {
                  dc.add( TestService,
                          () => new TestService( 'test' ) )
                  const instance = dc.serve( TestService )
                  expect( instance instanceof TestService )
                    .toBe( true )
                  expect( instance.constructorEcho )
                    .toBe( 'test' )
                } )
            it( 'Resolve constructor with unregistered dependencies (in lazy mode)',
                () => {
                  dc.servingBehaviour = ServingBehaviour.Lazy
                  const instance      = dc.serve( ConstructorMetadataTestService )
                  expect( instance instanceof ConstructorMetadataTestService )
                    .toBe( true )
                  expect( () => {
                    instance.echo( 'WILL BE IGNORED' )
                  } )
                    .toThrow( 'Cannot read property \'echo\' of null' )
                } )
            it( 'Resolve constructor with registered dependencies (in lazy mode)',
                () => {
                  dc.servingBehaviour = ServingBehaviour.Lazy
                  dc.add( TestService )
                  const instance = dc.serve( ConstructorMetadataTestService )
                  expect( instance instanceof ConstructorMetadataTestService )
                    .toBe( true )
                  const input = 'test-input'
                  expect( instance.echo( input ) )
                    .toBe( input )
                } )
            it( 'Resolve constructor with unregistered dependencies (in greedy mode)',
                () => {
                  const instance = dc.serve( ConstructorMetadataTestService )
                  expect( instance instanceof ConstructorMetadataTestService )
                    .toBe( true )
                  const input = 'test-input'
                  expect( instance.echo( input ) )
                    .toBe( input )
                } )
            it( 'Resolve property with dependencies',
                () => {
                  dc.add( TestService )
                  const instance = dc.serve( PropertyMetadataTestService )
                  expect( instance instanceof PropertyMetadataTestService )
                    .toBe( true )
                  const input = 'test-input'
                  expect( instance.echo( input ) )
                    .toBe( input )
                } )
          } )
describe( 'DependencyContainer Abstractions',
          () => {
            let dc: DependencyContainer
            beforeEach( () => {
              dc = new DependencyContainer
            } )
            it( 'Add and get TestService with abstraction via abstraction query',
                () => {
                  dc.add( AbstractTestService,
                          TestService )
                  const abstraction = dc.abstract( AbstractTestService )
                                        .single()
                  expect( abstraction instanceof TestService )
                    .toBe( true )
                } )
          } )
describe( 'DependencyContainer Decorators',
          () => {
            let dc: DependencyContainer
            beforeEach( () => {
              dc = new DependencyContainer
            } )
            it( 'No Decorator (Transient)',
                () => {
                  const input1    = 'input-1'
                  const instance1 = dc.serve( TestService,
                                              input1 )
                  expect( instance1 instanceof TestService )
                    .toBe( true )
                  expect( instance1.constructorEcho )
                    .toBe( input1 )
                  const input2    = 'input-2'
                  const instance2 = dc.serve( TestService,
                                              input2 )
                  expect( instance2 instanceof TestService )
                    .toBe( true )
                  expect( instance2.constructorEcho )
                    .toBe( input2 )
                } )
            it( 'Singleton',
                () => {
                  const input1    = 'input-1'
                  const instance1 = dc.serve( SingletonTestService,
                                              input1 )
                  expect( instance1 instanceof SingletonTestService )
                    .toBe( true )
                  expect( instance1.constructorEcho )
                    .toBe( input1 )
                  const instance2 = dc.serve( SingletonTestService,
                                              'WILL BE IGNORED' )
                  expect( instance2 instanceof SingletonTestService )
                    .toBe( true )
                  expect( instance2.constructorEcho )
                    .toBe( input1 )
                } )
            it( 'Scoped without scope (Transient)',
                () => {
                  const input1    = 'input-1'
                  const instance1 = dc.serve( ScopedTestService,
                                              input1 )
                  expect( instance1 instanceof ScopedTestService )
                    .toBe( true )
                  expect( instance1.constructorEcho )
                    .toBe( input1 )
                  const input2    = 'input-2'
                  const instance2 = dc.serve( ScopedTestService,
                                              input2 )
                  expect( instance2 instanceof ScopedTestService )
                    .toBe( true )
                  expect( instance2.constructorEcho )
                    .toBe( input2 )
                } )
            it( 'Scoped with scope (Singleton)',
                () => {
                  const scope = 'test-scope'
                  dc.useScope( scope )
                  const input1    = 'input-1'
                  const instance1 = dc.serve( ScopedTestService,
                                              input1 )
                  expect( instance1 instanceof ScopedTestService )
                    .toBe( true )
                  expect( instance1.constructorEcho )
                    .toBe( input1 )
                  const instance2 = dc.serve( ScopedTestService,
                                              'WILL BE IGNORED' )
                  expect( instance2 instanceof ScopedTestService )
                    .toBe( true )
                  expect( instance2.constructorEcho )
                    .toBe( input1 )
                } )
          } )
describe( 'DependencyContainer Extensions',
          () => {
            let dc: DependencyContainer
            beforeEach( () => {
              dc = new DependencyContainer
            } )
            it( 'DependencyKeyGenerator is not self verified',
                () => {
                  expect( () => {
                    dc.add( UnverifiedKeyGenerator )
                  } )
                    .toThrow( '[@dvolper/tsdi]: DependencyKeyGenerator must be self verified. (TSDI Key is missing)' )
                } )
            it( 'TestKeyGenerator',
                () => {
                  const input = '-TEST'
                  dc.add( TestKeyGenerator,
                          () => new TestKeyGenerator( input ) )
                  dc.add( TestService )
                  expect( ( <DependencyCreator<TestService>>TestService ).__tsdi__.key.endsWith( input ) )
                } )
          } )
