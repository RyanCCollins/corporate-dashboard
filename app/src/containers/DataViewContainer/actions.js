import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  UPDATE_CURRENT_CURSOR,
  INCREMENT_DATA_VIEW_PAGE,
} from './constants';

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

// updateCurrentCursor :: Int -> {Action}
export const updateCurrentCursor = (next) => ({
  type: UPDATE_CURRENT_CURSOR,
  next,
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

// incrementPage :: None -> {Action}
export const incrementPage = () => ({
  type: INCREMENT_DATA_VIEW_PAGE,
});
