import {
  LOAD_CUSTOMER_DATA_INITIATION,
  LOAD_CUSTOMER_DATA_SUCCESS,
  LOAD_CUSTOMER_DATA_FAILURE,
} from './constants';

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const keyMetricsReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case LOAD_CUSTOMER_DATA_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case LOAD_CUSTOMER_DATA_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          data: action.data,
        });
      case LOAD_CUSTOMER_DATA_FAILURE:
        return Object.assign({}, state, {
          isLoading: true,
          error: action.error,
        });
      default:
        return state;
    }
  };

export default keyMetricsReducer;
