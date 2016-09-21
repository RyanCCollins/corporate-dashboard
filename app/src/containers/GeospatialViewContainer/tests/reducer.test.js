import expect from 'expect';
import employeesReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('geospatialViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      employeesReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle the SELECT_EMPLOYEE_INDEX action', () => {
    const index = 1;
    const stateAfter = {
      selectedIndex: index,
    };
    expect(
      employeesReducer(initialState, {
        type: types.SELECT_EMPLOYEE_INDEX,
        index,
      })
    ).toEqual(stateAfter);
  });
});
