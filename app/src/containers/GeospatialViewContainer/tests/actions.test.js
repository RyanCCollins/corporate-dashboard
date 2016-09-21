import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('GeospatialView actions', () => {
  it('should have an action with type of SELECT_EMPLOYEE_INDEX', () => {
    const index = 1;
    const expectedAction = {
      type: types.SELECT_EMPLOYEE_INDEX,
      index,
    };
    expect(
      actions.selectIndex(index)
    ).toEqual(expectedAction);
  });
});
