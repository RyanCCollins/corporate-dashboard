import expect from 'expect';
import {
  geospatialViewDefaultAction,
} from '../actions';
import {
  GEOSPATIALVIEW_DEFAULT_ACTION,
} from '../constants';

describe('GeospatialView actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: GEOSPATIALVIEW_DEFAULT_ACTION,
      };
      expect(geospatialViewDefaultAction()).toEqual(expected);
    });
  });
});
