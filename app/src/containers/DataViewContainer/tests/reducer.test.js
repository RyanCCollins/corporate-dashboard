import expect from 'expect';
import reducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('dataViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
  it('handles SET_SECONDARY_FILTER_STATUS', () => {
    const status = 'Critical';
    const stateBefore = {
      secondaryFilter: {
        status: 'All',
      },
    };
    const stateAfter = {
      secondaryFilter: {
        status,
      },
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_SECONDARY_FILTER_STATUS,
        status,
      })
    ).toEqual(stateAfter);
  });
  it('handles SET_SECONDARY_FILTER_STATE', () => {
    const state = 'Active';
    const stateBefore = {
      secondaryFilter: {
        state: 'All',
      },
    };
    const stateAfter = {
      secondaryFilter: {
        state,
      },
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_SECONDARY_FILTER_STATE,
        state,
      })
    ).toEqual(stateAfter);
  });
  it('handles SET_SECONDARY_FILTER_ORDER', () => {
    const order = 'Ascending';
    const stateBefore = {
      secondaryFilter: {
        order: 'None',
      },
    };
    const stateAfter = {
      secondaryFilter: {
        order,
      },
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_SECONDARY_FILTER_ORDER,
        order,
      })
    ).toEqual(stateAfter);
  });
  it('handles INCREMENT_DATA_VIEW_PAGE', () => {
    const stateBefore = {
      currentPage: 1,
    };
    const stateAfter = {
      currentPage: 2,
    };
    expect(
      reducer(stateBefore, {
        type: types.INCREMENT_DATA_VIEW_PAGE,
      })
    ).toEqual(stateAfter);
  });
  it('handles APPLY_SECONDARY_FILTER', () => {
    const visibleIssues = [
      {
        id: 1,
        status: 'critical',
      },
      {
        id: 2,
        status: 'warning',
      },
    ];
    const afterIssues = [
      {
        id: 1,
        status: 'critical',
      },
    ];
    const stateBefore = {
      visibleIssues,
      secondaryFilter: {
        status: 'Critical',
        order: 'None',
        state: 'All',
      },
    };
    const stateAfter = {
      visibleIssues: afterIssues,
      secondaryFilter: {
        status: 'Critical',
        order: 'None',
        state: 'All',
      },
    };
    expect(
      reducer(stateBefore, {
        type: types.APPLY_SECONDARY_FILTER,
        issues: visibleIssues,
      })
    ).toEqual(stateAfter);
  });
  it('handles SET_EMPLOYEE_FILTER', () => {
    const employee = 'Ryan Collins';
    const stateBefore = {
      currentFilter: {
        isFiltering: false,
        employee: 'All',
        customer: 'All',
      },
    };
    const stateAfter = {
      currentFilter: {
        isFiltering: false,
        employee,
        customer: 'All',
      },
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_EMPLOYEE_FILTER,
        employee,
      })
    ).toEqual(stateAfter);
  });
  it('handles SET_CUSTOMER_FILTER', () => {
    const customer = 'Ryan Collins';
    const stateBefore = {
      currentFilter: {
        isFiltering: false,
        employee: 'All',
        customer: 'All',
      },
    };
    const stateAfter = {
      currentFilter: {
        isFiltering: false,
        employee: 'All',
        customer,
      },
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_CUSTOMER_FILTER,
        customer,
      })
    ).toEqual(stateAfter);
  });
  it('handles APPLY_CURRENT_FILTER', () => {
    const issues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
      },
      {
        id: 2,
        employee: {
          name: 'Andreas Daimainger',
        },
      },
    ];
    const afterIssues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
      },
    ];
    const stateBefore = {
      currentFilter: {
        isFiltering: false,
        employee: 'Ryan Collins',
        customer: 'All',
      },
      visibleIssues: issues,
    };
    const stateAfter = {
      currentFilter: {
        isFiltering: true,
        employee: 'Ryan Collins',
        customer: 'All',
      },
      visibleIssues: afterIssues,
    };
    expect(
      reducer(stateBefore, {
        type: types.APPLY_CURRENT_FILTER,
        issues,
      })
    ).toEqual(stateAfter);
  });
  it('handles CLEAR_CURRENT_FILTER', () => {
    const afterIssues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
      },
      {
        id: 2,
        employee: {
          name: 'Andreas Daimainger',
        },
      },
    ];
    const issues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
      },
    ];
    const stateBefore = {
      currentFilter: {
        isFiltering: true,
        employee: 'Ryan Collins',
        customer: 'All',
      },
      visibleIssues: issues,
    };
    const stateAfter = {
      currentFilter: {
        isFiltering: false,
        employee: 'All',
        customer: 'All',
      },
      visibleIssues: afterIssues,
    };
    expect(
      reducer(stateBefore, {
        type: types.CLEAR_CURRENT_FILTER,
        issues: afterIssues,
      })
    ).toEqual(stateAfter);
  });
  it('handles SET_DATA_VIEW_SEARCH_VALUE', () => {
    const issues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
        customer: {
          name: 'None',
        },
        description: 'Hello World',
      },
      {
        id: 2,
        employee: {
          name: 'Andreas Daimainger',
        },
        customer: {
          name: 'None',
        },
        description: 'Hello World',
      },
    ];
    const afterIssues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
        customer: {
          name: 'None',
        },
        description: 'Hello World',
      },
    ];
    const value = 'Ryan Collins';
    const stateBefore = {
      search: {
        value: '',
        isSearching: false,
      },
      visibleIssues: issues,
    };
    const stateAfter = {
      search: {
        value,
        isSearching: true,
      },
      visibleIssues: afterIssues,
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_DATA_VIEW_SEARCH_VALUE,
        value,
        issues,
      })
    ).toEqual(stateAfter);
  });
  it('handles CLEAR_DATA_VIEW_SEARCH_VALUE', () => {
    const issues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
        customer: {
          name: 'None',
        },
        description: 'Hello World',
      },
    ];
    const afterIssues = [
      {
        id: 1,
        employee: {
          name: 'Ryan Collins',
        },
        customer: {
          name: 'None',
        },
        description: 'Hello World',
      },
      {
        id: 2,
        employee: {
          name: 'Andreas Daimainger',
        },
        customer: {
          name: 'None',
        },
        description: 'Hello World',
      },
    ];
    const value = 'Ryan Collins';
    const stateBefore = {
      search: {
        value,
        isSearching: true,
      },
      visibleIssues: issues,
    };
    const stateAfter = {
      search: {
        value: '',
        isSearching: false,
      },
      visibleIssues: afterIssues,
    };
    expect(
      reducer(stateBefore, {
        type: types.CLEAR_DATA_VIEW_SEARCH_VALUE,
        issues: afterIssues,
      })
    ).toEqual(stateAfter);
  });
  it('handles INCREMENT_DATA_VIEW_COUNTER', () => {
    const stateBefore = {
      counter: 0,
    };
    const stateAfter = {
      counter: 1,
    };
    expect(
      reducer(stateBefore, {
        type: types.INCREMENT_DATA_VIEW_COUNTER,
      })
    ).toEqual(stateAfter);
  });
  it('handles INCREMENT_DATA_VIEW_COUNTER cycling back to 0 from 6', () => {
    const stateBefore = {
      counter: 6,
    };
    const stateAfter = {
      counter: 0,
    };
    expect(
      reducer(stateBefore, {
        type: types.INCREMENT_DATA_VIEW_COUNTER,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SET_POLLING_INTERVAL', () => {
    const stateBefore = {
      pollInterval: 10000,
    };
    const stateAfter = {
      pollInterval: 20000,
    };
    expect(
      reducer(stateBefore, {
        type: types.SET_POLLING_INTERVAL,
        value: 20000,
      })
    ).toEqual(stateAfter);
  });
});
