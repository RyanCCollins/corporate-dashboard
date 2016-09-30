import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('IssueKeyMetrics actions', () => {
  describe('index actions', () => {
    it('has a type of KEY_METRICS_SET_ACTIVE_INDEX', () => {
      const expected = {
        type: types.KEY_METRICS_SET_ACTIVE_INDEX,
        index: 0,
      };
      expect(actions.setActiveIndex(0)).toEqual(expected);
    });
    it('has a type of KEY_METRICS_CLEAR_ACTIVE_INDEX', () => {
      const expected = {
        type: types.KEY_METRICS_CLEAR_ACTIVE_INDEX,
      };
      expect(actions.clearActiveIndex()).toEqual(expected);
    });
  });
});
