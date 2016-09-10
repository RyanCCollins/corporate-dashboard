import {
  LOAD_ISSUE_DATA_INITIATION,
  LOAD_ISSUE_DATA_SUCCESS,
  LOAD_ISSUE_DATA_FAILURE,
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
} from './constants';

export const initialState = {
  issues: [],
  filteredIssues: null,
  currentFilter: {
    employee: 'All',
    customer: 'All',
  },
  isLoading: false,
  error: null,
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
  state.filter(item =>
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
      case LOAD_ISSUE_DATA_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case LOAD_ISSUE_DATA_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          issues: action.issues,
        });
      case LOAD_ISSUE_DATA_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error,
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
