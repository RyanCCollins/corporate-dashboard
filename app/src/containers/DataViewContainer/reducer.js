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
} from './constants';

export const initialState = {
  pageIncrementor: 9,
  currentPage: 1,
  visibleIssues: null,
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
    isFilter: false,
    status: 'All',
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
          currentFilter: currentFilter(state, action),
        });
      case SET_CUSTOMER_FILTER:
        return Object.assign({}, state, {
          currentFilter: currentFilter(state, action),
        });
      case APPLY_CURRENT_FILTER:
        return update(state, {
          currentFilter: {
            $set: {
              isFiltering: true,
            },
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
        });
      default:
        return state;
    }
  };

export default issueReducer;
