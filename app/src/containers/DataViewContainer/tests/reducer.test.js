import expect from 'expect';
import dataViewReducer, { initialState } from '../reducer';

describe('dataViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      dataViewReducer(undefined, {})
    ).toEqual(initialState);
  });
});
