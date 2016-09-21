import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('<DataViewContainer /> actions', () => {
  it('has a type of SET_SECONDARY_FILTER_STATUS', () => {
    const status = 'Critical';
    const issues = [];
    const expectedAction = {
      type: types.SET_SECONDARY_FILTER_STATUS,
      status,
      issues,
    };
    expect(
      actions.setSecondaryFilterStatus(status, issues)
    ).toEqual(expectedAction);
  });
  it('has a type of SET_SECONDARY_FILTER_STATE', () => {
    const state = 'Active';
    const issues = [];
    const expectedAction = {
      type: types.SET_SECONDARY_FILTER_STATE,
      state,
      issues,
    };
    expect(
      actions.setSecondaryFilterState(state, issues)
    ).toEqual(expectedAction);
  });
  it('has a type of SET_SECONDARY_FILTER_ORDER', () => {
    const order = 'Descending';
    const issues = [];
    const expectedAction = {
      type: types.SET_SECONDARY_FILTER_ORDER,
      order,
      issues,
    };
    expect(
      actions.setSecondaryFilterOrder(order, issues)
    ).toEqual(expectedAction);
  });
});
