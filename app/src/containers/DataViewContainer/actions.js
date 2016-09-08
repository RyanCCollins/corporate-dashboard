import {
  LOAD_ISSUE_DATA_INITIATION,
  LOAD_ISSUE_DATA_SUCCESS,
  LOAD_ISSUE_DATA_FAILURE,
} from './constants';

const issueUrl = `http://0.0.0.0:1338/api/issues`;

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
