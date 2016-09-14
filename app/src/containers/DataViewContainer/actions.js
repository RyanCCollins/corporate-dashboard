import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
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
