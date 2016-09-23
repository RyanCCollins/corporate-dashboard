import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  INCREMENT_DATA_VIEW_PAGE,
  APPLY_SECONDARY_FILTER,
} from './constants';

// setSecondaryFilterStatus :: String -> {Action}
export const setSecondaryFilterStatus = (status, issues) => ({
  type: SET_SECONDARY_FILTER_STATUS,
  status,
  issues,
});

// setSecondaryFilterState :: String -> {Action}
export const setSecondaryFilterState = (state, issues) => ({
  type: SET_SECONDARY_FILTER_STATE,
  state,
  issues,
});

// setSecondaryFilterOrder :: String -> {Action}
export const setSecondaryFilterOrder = (order, issues) => ({
  type: SET_SECONDARY_FILTER_ORDER,
  order,
  issues,
});

// incrementPage :: None -> {Action}
export const incrementPage = () => ({
  type: INCREMENT_DATA_VIEW_PAGE,
});

export const applySecondaryFilter = (issues) => ({
  type: APPLY_SECONDARY_FILTER,
  issues,
});

export const setSecondaryFilter = (filter, type, issues) =>
  (dispatch) => {
    switch (type) {
      case 'status':
        dispatch(setSecondaryFilterStatus(filter, issues));
        break;
      case 'state':
        dispatch(setSecondaryFilterState(filter, issues));
        break;
      case 'order':
        dispatch(setSecondaryFilterOrder(filter, issues));
        break;
      default:
        break;
    }
    dispatch(
      applySecondaryFilter(issues)
    );
  };
