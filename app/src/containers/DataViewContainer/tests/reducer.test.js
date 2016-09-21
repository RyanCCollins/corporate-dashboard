import expect from 'expect';
import reducer, { initialState } from '../reducer';
import * as types from '../actions';

describe('dataViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
});
