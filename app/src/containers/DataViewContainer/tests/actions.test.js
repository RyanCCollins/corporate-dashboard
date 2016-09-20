import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('<DataViewContainer /> actions', () => {
  it('has a type of SET_SECONDARY_FILTER_STATUS', () => {
    const status = 'Critical';
    const expectedAction = {
      type: types.SET_SECONDARY_FILTER_STATUS,
      status,
    };
    expect(
      actions.setSecondaryFilterStatus(status)
    ).toEqual(expectedAction);
  });
  it('has a type of SET_SECONDARY_FILTER_STATE', () => {
    const state = 'Active';
    const expectedAction = {
      type: types.SET_SECONDARY_FILTER_STATE,
      state,
    };
    expect(
      actions.setSecondaryFilterState(state)
    ).toEqual(expectedAction);
  });
  it('has a type of SET_SECONDARY_FILTER_ORDER', () => {
    const order = 'Descending';
    const expectedAction = {
      type: types.SET_SECONDARY_FILTER_ORDER,
      order,
    };
    expect(
      actions.setSecondaryFilterOrder(order)
    ).toEqual(expectedAction);
  });
});
