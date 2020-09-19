// @flow
import { describe, it } from 'flow-typed-test';
import { batch } from 'react-redux';

describe('batch', () => {
  it('should accept a function as an argument', () => {
    batch(() => {
      // ...
    })
  });

  it('should not allow a values that is not a function as an argument', () => {
    // $FlowExpectedError - only a function is allowed
    batch(true)
  });

  it('returns void', () => {
    (batch(() => {
      // ...
    }): void)
    
    batch(() => {
      // $FlowExpectedError - function must return void
      return true; 
    })
  })

})