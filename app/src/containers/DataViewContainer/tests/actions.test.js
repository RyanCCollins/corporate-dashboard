import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('<DataViewContainer /> actions', () => {
  it('should have a type of SET_SECONDARY_FILTER_STATUS', () => {
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
  it('should have a type of SET_SECONDARY_FILTER_STATE', () => {
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
  it('should have a type of SET_SECONDARY_FILTER_ORDER', () => {
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
  it('should have a type of INCREMENT_DATA_VIEW_PAGE', () => {
    const expectedAction = {
      type: types.INCREMENT_DATA_VIEW_PAGE,
    };
    expect(
      actions.incrementPage()
    ).toEqual(expectedAction);
  });
  it('should have a type of APPLY_SECONDARY_FILTER', () => {
    const issues = [];
    const expectedAction = {
      type: types.APPLY_SECONDARY_FILTER,
      issues,
    };
    expect(
      actions.applySecondaryFilter(issues)
    ).toEqual(expectedAction);
  });
  it('should have a type of SET_EMPLOYEE_FILTER', () => {
    const employee = 'Barbara Streisand';
    const expectedAction = {
      type: types.SET_EMPLOYEE_FILTER,
      employee,
    };
    expect(
      actions.setEmployeeFilter(employee)
    ).toEqual(expectedAction);
  });
  it('should have a type of SET_CUSTOMER_FILTER', () => {
    const customer = 'Barbara Streisand';
    const expectedAction = {
      type: types.SET_CUSTOMER_FILTER,
      customer,
    };
    expect(
      actions.setCustomerFilter(customer)
    ).toEqual(expectedAction);
  });
  it('should have a type of APPLY_CURRENT_FILTER', () => {
    const issues = [];
    const expectedAction = {
      type: types.APPLY_CURRENT_FILTER,
      issues,
    };
    expect(
      actions.applyCurrentFilter(issues)
    ).toEqual(expectedAction);
  });
  it('should have a type of CLEAR_CURRENT_FILTER', () => {
    const expectedAction = {
      type: types.CLEAR_CURRENT_FILTER,
    };
    expect(
      actions.clearCurrentFilter()
    ).toEqual(expectedAction);
  });
  it('should have a type of SET_DATA_VIEW_SEARCH_VALUE', () => {
    const issues = [];
    const value = 'Bananas';
    const expectedAction = {
      type: types.SET_DATA_VIEW_SEARCH_VALUE,
      value,
      issues,
    };
    expect(
      actions.setSearchValue(value, issues)
    ).toEqual(expectedAction);
  });
  it('should have a type of CLEAR_DATA_VIEW_SEARCH_VALUE', () => {
    const issues = [];
    const expectedAction = {
      type: types.CLEAR_DATA_VIEW_SEARCH_VALUE,
      issues,
    };
    expect(
      actions.clearSearchValue(issues)
    ).toEqual(expectedAction);
  });
  it('should have a type of SET_POLLING_INTERVAL', () => {
    const expectedAction = {
      type: types.SET_POLLING_INTERVAL,
      value: 20000,
    };
    expect(
      actions.setPollValue(20000)
    ).toEqual(expectedAction);
  });
});
