import expect from 'expect';
import * as types from '../constants';
import issueKeyMetricsReducer, { initialState } from '../reducer';

describe('issueKeyMetricsReducer', () => {
  it('returns the initial state', () => {
    expect(
      issueKeyMetricsReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle KEY_METRICS_SET_ACTIVE_INDEX', () => {
    const activeIndex = 1;
    const stateBefore = {
      activeIndex: 0,
    };
    const stateAfter = {
      activeIndex,
    };
    expect(
      issueKeyMetricsReducer(stateBefore, {
        type: types.KEY_METRICS_SET_ACTIVE_INDEX,
        index: activeIndex,
      }),
    ).toEqual(stateAfter);
  });
  it('should handle KEY_METRICS_CLEAR_ACTIVE_INDEX', () => {
    const stateBefore = {
      activeIndex: 1,
    };
    const stateAfter = {
      activeIndex: null,
    };
    expect(
      issueKeyMetricsReducer(stateBefore, {
        type: types.KEY_METRICS_CLEAR_ACTIVE_INDEX,
      }),
    ).toEqual(stateAfter);
  });
});
