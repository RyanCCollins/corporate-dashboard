import {
  LOAD_ISSUE_DATA_INITIATION,
  LOAD_ISSUE_DATA_SUCCESS,
  LOAD_ISSUE_DATA_FAILURE,
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
} from './constants';
import fetch from 'graphql-fetch';

const apiUrl = 'http://0.0.0.0:1338/api';

const query = `
{
  store {
    issues {
      id
      submission
      closed
      status
      customer {
        ...Person
      }
      employee {
        ...Person
      }
      description
    }
  }
}

fragment Person on Person {
  name
  avatar
}
`;

const options = {
  method: 'GET',
  mode: 'no-cors',
};

export const loadIssueDataInitiation = () => ({
  type: LOAD_ISSUE_DATA_INITIATION,
});

export const loadIssueDataSuccess = (issues) => ({
  type: LOAD_ISSUE_DATA_SUCCESS,
  issues,
});

export const loadIssueDataFailure = (error) => ({
  type: LOAD_ISSUE_DATA_FAILURE,
  error,
});

export const loadIssueData = () =>
  (dispatch) => {
    dispatch(
      loadIssueDataInitiation()
    );
    return fetch(apiUrl)(query, options)
      .then(res => {
        console.log(res);
        dispatch(
          loadIssueDataSuccess(res.issues)
        );
      })
      .catch(error => {
        dispatch(
          loadIssueDataFailure(error)
        );
      });
  };

// setSecondaryFilterStatus :: String -> {Action}
export const setSecondaryFilterStatus = (status) => ({
  type: SET_SECONDARY_FILTER_STATUS,
  status,
});

// setSecondaryFilterState :: String -> {Action}
export const setSecondaryFilterState = (state) => ({
  type: SET_SECONDARY_FILTER_STATE,
  state,
});

// setSecondaryFilterOrder :: String -> {Action}
export const setSecondaryFilterOrder = (order) => ({
  type: SET_SECONDARY_FILTER_ORDER,
  order,
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
  };
