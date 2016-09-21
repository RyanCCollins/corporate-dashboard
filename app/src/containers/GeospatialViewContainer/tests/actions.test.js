import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('GeospatialView actions', () => {
  it('has a type of SELECT_EMPLOYEE_INDEX', () => {
    const index = 1;
    const expectedAction = {
      type: types.SELECT_EMPLOYEE_INDEX,
      index,
    };
    expect(
      actions.selectIndex(index)
    ).toEqual(expectedAction);
  });
  it('has a type of TOGGLE_MOBILE_MODE', () => {
    const isMobile = false;
    const expectedAction = {
      type: types.TOGGLE_MOBILE_MODE,
      isMobile,
    };
    expect(
      actions.toggleMobileMode(isMobile)
    ).toEqual(expectedAction);
  });
});
