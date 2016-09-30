import expect from 'expect';
import {
  issueKeyMetricsDefaultAction,
} from '../actions';
import {
  ISSUEKEYMETRICS_DEFAULT_ACTION,
} from '../constants';

describe('IssueKeyMetrics actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ISSUEKEYMETRICS_DEFAULT_ACTION,
      };
      expect(issueKeyMetricsDefaultAction()).toEqual(expected);
    });
  });
});
