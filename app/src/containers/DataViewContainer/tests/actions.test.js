import expect from 'expect';
import {
  dataViewDefaultAction,
} from '../actions';
import {
  DATAVIEW_DEFAULT_ACTION,
} from '../constants';

describe('DataView actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DATAVIEW_DEFAULT_ACTION,
      };
      expect(dataViewDefaultAction()).toEqual(expected);
    });
  });
});
