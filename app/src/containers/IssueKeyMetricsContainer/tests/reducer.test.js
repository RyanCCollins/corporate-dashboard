import expect from 'expect';
import issueKeyMetricsReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('issueKeyMetricsReducer', () => {
  it('returns the initial state', () => {
    expect(
      issueKeyMetricsReducer(undefined, {})
    ).toEqual(initialState);
  });
});
