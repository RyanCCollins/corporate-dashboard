import {
  LOAD_ISSUE_DATA_INITIATION,
  LOAD_ISSUE_DATA_SUCCESS,
  LOAD_ISSUE_DATA_FAILURE,
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  GET_FILTERED_ISSUES,
} from './constants';

const issueUrl = 'http://0.0.0.0:1338/api/issues';

const loadIssueDataInitiation = () => ({
  type: LOAD_ISSUE_DATA_INITIATION,
});

const loadIssueDataSuccess = (issues) => ({
  type: LOAD_ISSUE_DATA_SUCCESS,
  issues,
});

const loadIssueDataFailure = (error) => ({
  type: LOAD_ISSUE_DATA_FAILURE,
  error,
});

export const loadIssueData = () =>
  (dispatch) => {
    dispatch(
      loadIssueDataInitiation()
    );
    return fetch(issueUrl)
      .then(res => res.json())
      .then(data => {
        dispatch(
          loadIssueDataSuccess(data)
        );
      })
      .catch(error => {
        dispatch(
          loadIssueDataFailure(error)
        );
      });
  };

// setSecondaryFilterStatus :: String -> {Action}
const setSecondaryFilterStatus = (status) => ({
  type: SET_SECONDARY_FILTER_STATUS,
  status,
});

// setSecondaryFilterState :: String -> {Action}
const setSecondaryFilterState = (state) => ({
  type: SET_SECONDARY_FILTER_STATE,
  state,
});

// setSecondaryFilterOrder :: String -> {Action}
const setSecondaryFilterOrder = (order) => ({
  type: SET_SECONDARY_FILTER_ORDER,
  order,
});

const getFilterdIssues = ({ filter, filterType }) => ({
  type: GET_FILTERED_ISSUES,
  filter,
  filterType,
});

export const setSecondaryFilter = (filter, type) =>
  (dispatch) => {
    switch (type) {
      case 'status':
        dispatch(setSecondaryFilterStatus(filter));
        break;
      case 'state':
        dispatch(setSecondaryFilterState(filter));
        break;
      case 'order':
        dispatch(setSecondaryFilterOrder(filter));
        break;
      default:
        break;
    }
    dispatch(getFilterdIssues({ filter, filterType: type }));
  };
