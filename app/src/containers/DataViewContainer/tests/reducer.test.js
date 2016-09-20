import expect from 'expect';
import reducer, { initialState } from '../reducer';
import * as types from '../actions';

describe('dataViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle SET_SECONDARY_FILTER_STATUS', () => {
    const status = 'Critical';
    const stateAfter = Object.assign({}, initialState, {
      secondaryFilter: {
        status,
        state: 'All',
        order: 'Ascending',
        options: {
          statuses: [
            'All',
            'Critical',
            'Warning',
            'Ok',
            'Disabled',
            'Unknown',
          ],
          states: [
            'All',
            'Active',
            'Inactive',
          ],
          orders: [
            'Ascending',
            'Descending',
          ],
        },
      },
    });
    expect(
      reducer(initialState, {
        type: types.SET_SECONDARY_FILTER_STATUS,
        status,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SET_SECONDARY_FILTER_STATE', () => {
    const state = 'Active';
    const stateAfter = Object.assign({}, initialState, {
      secondaryFilter: {
        status: 'All',
        state,
        order: 'Ascending',
        options: {
          statuses: [
            'All',
            'Critical',
            'Warning',
            'Ok',
            'Disabled',
            'Unknown',
          ],
          states: [
            'All',
            'Active',
            'Inactive',
          ],
          orders: [
            'Ascending',
            'Descending',
          ],
        },
      },
    });
    expect(
      reducer(initialState, {
        type: types.SET_SECONDARY_FILTER_STATE,
        state,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SET_SECONDARY_FILTER_ORDER', () => {
    const order = 'Descending';
    const stateAfter = Object.assign({}, initialState, {
      secondaryFilter: {
        status: 'All',
        state: 'All',
        order,
        options: {
          statuses: [
            'All',
            'Critical',
            'Warning',
            'Ok',
            'Disabled',
            'Unknown',
          ],
          states: [
            'All',
            'Active',
            'Inactive',
          ],
          orders: [
            'Ascending',
            'Descending',
          ],
        },
      },
    });
    expect(
      reducer(initialState, {
        type: types.SET_SECONDARY_FILTER_ORDER,
        order,
      })
    ).toEqual(stateAfter);
  });
});
