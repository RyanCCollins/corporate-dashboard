import expect from 'expect';
import {
  keyMetricsViewDefaultAction,
} from '../actions';
import {
  KEYMETRICSVIEW_DEFAULT_ACTION,
} from '../constants';

describe('KeyMetricsView actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: KEYMETRICSVIEW_DEFAULT_ACTION,
      };
      expect(keyMetricsViewDefaultAction()).toEqual(expected);
    });
  });
});
