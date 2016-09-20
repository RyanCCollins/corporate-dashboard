import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  UPDATE_CURRENT_CURSOR,
  INCREMENT_DATA_VIEW_PAGE,
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

// updateCurrentCursor :: Int -> {Action}
export const updateCurrentCursor = (next) => ({
  type: UPDATE_CURRENT_CURSOR,
  next,
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
  };

// incrementPage :: None -> {Action}
export const incrementPage = () => ({
  type: INCREMENT_DATA_VIEW_PAGE,
});
