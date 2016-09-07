import expect from 'expect';
import keyMetricsViewReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('keyMetricsViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      keyMetricsViewReducer(undefined, {})
    ).toEqual(initialState);
  });
});
