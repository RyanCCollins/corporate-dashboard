import {
  LOAD_ISSUE_DATA_INITIATION,
  LOAD_ISSUE_DATA_SUCCESS,
  LOAD_ISSUE_DATA_FAILURE,
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  GET_FILTERED_ISSUES,
} from './constants';

const initialState = {
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

const filterByStatus = (state, filter) => {
  switch (filter) {
    case 'All':
      return state;
    case 'Critical':
      return state.filter(i => i.status === 'critical');
    case 'Warning':
      return state.filter(i => i.status === 'warning');
    case 'Ok':
      return state.filter(i => i.status === 'ok');
    case 'Disabled':
      return state.filter(i => i.status === 'disabled');
    case 'Unknown':
      return state.filter(i => i.status === 'unknown');
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const filterByOrder = (state, filter) => {
  switch (filter) {
    case 'Ascending':
      return state.sort((a, b) => new Date(a.submission) - new Date(b.submission));
    case 'Descending':
      return state.sort((a, b) => new Date(b.submission) - new Date(a.submission));
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const filterByState = (state, filter) => {
  switch (filter) {
    case 'All':
      return state;
    case 'Active':
      return state.filter(i => i.isActive);
    case 'Inactive':
      return state.filter(i => !i.isActive);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const selectIssues = (state = initialState) =>
  state.filteredIssues != null ? // eslint-disable-line
    state.filteredIssues : state.issues;

const getFilteredIssues = (state = initialState, filter, type) => {
  switch (type) {
    case 'state':
      return Object.assign({}, state, {
        filteredIssues: filterByState(selectIssues(state), filter),
      });
    case 'order':
      return Object.assign({}, state, {
        filteredIssues: filterByOrder(selectIssues(state), filter),
      });
    case 'status':
      return Object.assign({}, state, {
        filteredIssues: filterByStatus(selectIssues(state), filter),
      });
    default:
      return state;
  }
};

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
        });
      case SET_SECONDARY_FILTER_STATE:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
        });
      case SET_SECONDARY_FILTER_ORDER:
        return Object.assign({}, state, {
          secondaryFilter: secondaryFilter(state.secondaryFilter, action),
        });
      case GET_FILTERED_ISSUES:
        return getFilteredIssues(state, action.filter, action.filterType);
      default:
        return state;
    }
  };

export default issueReducer;
