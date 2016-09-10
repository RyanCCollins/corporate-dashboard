import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('<DataViewContainer /> actions', () => {
  it('has a type of LOAD_ISSUE_DATA_INITIATION', () => {
    const expectedAction = {
      type: types.LOAD_ISSUE_DATA_INITIATION,
    };
    expect(
      actions.loadIssueDataInitiation()
    ).toEqual(expectedAction);
  });
  it('has a type of LOAD_ISSUE_DATA_SUCCESS', () => {
    const issues = [
      { id: 1, description: 'Hello World' },
      { id: 10, description: 'Hello world' },
    ];
    const expectedAction = {
      type: types.LOAD_ISSUE_DATA_SUCCESS,
      issues,
    };
    expect(
      actions.loadIssueDataSuccess(issues)
    ).toEqual(expectedAction);
  });
  it('has a type of LOAD_ISSUE_DATA_FAILURE', () => {
    const error = new Error('An error has occured');
    const expectedAction = {
      type: types.LOAD_ISSUE_DATA_FAILURE,
      error,
    };
    expect(
      actions.loadIssueDataFailure(error)
    ).toEqual(expectedAction);
  });
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
