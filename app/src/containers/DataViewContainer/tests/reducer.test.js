import expect from 'expect';
import dataViewReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('dataViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      dataViewReducer(undefined, {})
    ).toEqual(initialState);
  });
});
