import update from 'react-addons-update';
import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  INCREMENT_DATA_VIEW_PAGE,
  APPLY_SECONDARY_FILTER,
  SET_EMPLOYEE_FILTER,
  SET_CUSTOMER_FILTER,
  APPLY_CURRENT_FILTER,
  CLEAR_CURRENT_FILTER,
  SET_DATA_VIEW_SEARCH_VALUE,
  CLEAR_DATA_VIEW_SEARCH_VALUE,
  INCREMENT_DATA_VIEW_COUNTER,
  SET_POLLING_INTERVAL,
} from './constants';

export const initialState = {
  pollInterval: 20000,
  pageIncrementor: 9,
  currentPage: 1,
  counter: 0,
  visibleIssues: null,
  search: {
    value: '',
    isSearching: false,
  },
  currentFilter: {
    isFiltering: false,
    employee: 'All',
    customer: 'All',
  },
  tableHeaders: [
    'Submitted',
    'Closed',
    'Status',
    'Employee',
    'Customer',
    'Description',
  ],
  secondaryFilter: {
    status: 'All',
    state: 'All',
    order: 'None',
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
        'None',
        'Ascending',
        'Descending',
      ],
    },
  },
};

const visibleIssues = (state, action) =>
  action.issues.filter(item => {
    if (state.secondaryFilter.status === 'All') {
      return true;
    }
    return item.status === state.secondaryFilter.status.toLowerCase();
  }).filter(item => {
    if (state.secondaryFilter.state === 'Active') {
      return item.isActive;
    } else if (state.secondaryFilter.state === 'Inactive') {
      return !item.isActive;
    }
    return true;
  }).sort((a, b) => {
    if (state.secondaryFilter.order === 'Descending') {
      return new Date(b.submission.split('T')) - new Date(a.submission.split('T'));
    } else if (state.secondaryFilter.order === 'Ascending') {
      return new Date(a.submission.split('T')) - new Date(b.submission.split('T'));
    }
    return true;
  });

const secondaryFilter =
  (state = initialState.secondaryFilter, action) => {
    switch (action.type) {
      case SET_SECONDARY_FILTER_STATUS:
        return Object.assign({}, state, {
          status: action.status,
        });
      case SET_SECONDARY_FILTER_STATE:
        return Object.assign({}, state, {
          state: action.state,
        });
      case SET_SECONDARY_FILTER_ORDER:
        return Object.assign({}, state, {
          order: action.order,
        });
      default:
        return state;
    }
  };

const currentFilter = (state = initialState.currentFilter, action) => {
  switch (action.type) {
    case SET_EMPLOYEE_FILTER:
      return update(state, {
        employee: {
          $set: action.employee,
        },
      });
    case SET_CUSTOMER_FILTER:
      return update(state, {
        customer: {
          $set: action.customer,
        },
      });
    default: return state;
  }
};

const filteredIssues = (state = initialState, action) =>
  action.issues.filter((item) => {
    if (state.currentFilter.employee !== 'All') {
      return item.employee.name === state.currentFilter.employee;
    }
    return true;
  }).filter((item) => {
    if (state.currentFilter.customer !== 'All') {
      return item.customer.name === state.currentFilter.customer;
    }
    return true;
  });

const searchedIssues = (state = initialState, action) =>
  action.issues
    .filter((item) =>
      item.employee.name.toLowerCase().includes(action.value.toLowerCase()) ||
      item.customer.name.toLowerCase().includes(action.value.toLowerCase()) ||
      item.description.toLowerCase().includes(action.value.toLowerCase())
    );

const issueReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT_DATA_VIEW_PAGE:
        return Object.assign({}, state, {
          currentPage: state.currentPage + 1,
        });
      case SET_SECONDARY_FILTER_STATUS:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
        });
      case SET_SECONDARY_FILTER_STATE:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
        });
      case SET_SECONDARY_FILTER_ORDER:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
        });
      case APPLY_SECONDARY_FILTER:
        return Object.assign({}, state, {
          visibleIssues: visibleIssues(state, action),
        });
      case SET_EMPLOYEE_FILTER:
        return Object.assign({}, state, {
          currentFilter: currentFilter(state.currentFilter, action),
        });
      case SET_CUSTOMER_FILTER:
        return Object.assign({}, state, {
          currentFilter: currentFilter(state.currentFilter, action),
        });
      case APPLY_CURRENT_FILTER:
        return update(state, {
          currentFilter: {
            $merge: {
              isFiltering: true,
            },
          },
          visibleIssues: {
            $set: filteredIssues(state, action),
          },
        });
      case CLEAR_CURRENT_FILTER:
        return update(state, {
          currentFilter: {
            $set: {
              isFiltering: false,
              employee: 'All',
              customer: 'All',
            },
          },
          visibleIssues: {
            $set: action.issues,
          },
        });
      case SET_DATA_VIEW_SEARCH_VALUE:
        return update(state, {
          search: {
            value: {
              $set: action.value,
            },
            isSearching: {
              $set: action.value.length > 0,
            },
          },
          visibleIssues: {
            $set: searchedIssues(state, action),
          },
        });
      case CLEAR_DATA_VIEW_SEARCH_VALUE:
        return update(state, {
          search: {
            value: {
              $set: '',
            },
            isSearching: {
              $set: false,
            },
          },
          visibleIssues: {
            $set: action.issues,
          },
        });
      case INCREMENT_DATA_VIEW_COUNTER:
        return update(state, {
          counter: {
            $set: state.counter === 6 ? 0 : state.counter + 1,
          },
        });
      case SET_POLLING_INTERVAL:
        return update(state, {
          pollInterval: {
            $set: parseInt(action.value, 10),
          },
        });
      default:
        return state;
    }
  };

export default issueReducer;
