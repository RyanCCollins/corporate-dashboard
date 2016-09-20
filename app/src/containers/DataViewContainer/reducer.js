import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  INCREMENT_DATA_VIEW_PAGE,
} from './constants';

export const initialState = {
  pageIncrementor: 9,
  currentPage: 0,
  filteredIssues: null,
  currentFilter: {
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

const filteredIssues = (state, action) =>
  action.issues.filter(item =>
    state.secondaryFilter.status !== 'All' ?
      item.status === action.status : true
  ).filter(item =>
    state.secondaryFilter.state !== 'All' ?
      item.state === action.state : true
  );

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
          filteredIssues: filteredIssues(state, action),
        });
      case SET_SECONDARY_FILTER_STATE:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
          filteredIssues: filteredIssues(state, action),
        });
      case SET_SECONDARY_FILTER_ORDER:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
          filteredIssues: filteredIssues(state, action),
        });
      default:
        return state;
    }
  };

export default issueReducer;
