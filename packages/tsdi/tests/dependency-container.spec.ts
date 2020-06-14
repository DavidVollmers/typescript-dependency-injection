import {DependencyContainer}                        from '../lib/dependency-container'
import {TestService}                                from './test-service'
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
                    dc.create( null )
                  } )
                    .toThrow( MissingArgumentError( 'dependency',
                                                    'DependencyContainer::create' ) )
                  expect( () => {
                    dc.create( <any>{} )
                  } )
                    .toThrow( InvalidArgumentError( 'dependency',
                                                    'of type Function',
                                                    'DependencyContainer::create' ) )
                } )
            it( 'Create Number',
                () => {
                  const value = dc.create( Number )
                  expect( value instanceof Number )
                    .toBe( true )
                  expect( value.toString() )
                    .toBe( '0' )
                } )
            it( 'Create TestService and echo "test"',
                () => {
                  const instance = dc.create( TestService )
                  expect( instance instanceof TestService )
                    .toBe( true )
                  const input  = 'test'
                  const output = instance.echo( input )
                  expect( output )
                    .toBe( input )
                } )
          } )