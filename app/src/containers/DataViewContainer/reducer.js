import {
  LOAD_ISSUE_DATA_INITIATION,
  LOAD_ISSUE_DATA_SUCCESS,
  LOAD_ISSUE_DATA_FAILURE,
} from './constants';

const initialState = {
  issues: [],
  filters: {
    status: 'All',
    employee: 'All',
    customer: 'All',
    order: 'All',
  },
  isLoading: false,
  error: null,
  tableHeaders: [
    'Submitted',
    'Closed',
    'Employee',
    'Customer',
    'Description',
  ],
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
      default:
        return state;
    }
  };

export default issueReducer;
