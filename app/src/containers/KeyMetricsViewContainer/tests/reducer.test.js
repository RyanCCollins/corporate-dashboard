import expect from 'expect';
import reducer, { initialState } from '../reducer';

describe('keyMetricsViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
});
