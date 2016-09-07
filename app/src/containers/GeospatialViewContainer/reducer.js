import {
  LOAD_EMPLOYEE_DATA_INITIATION,
  LOAD_EMPLOYEE_DATA_SUCCESS,
  LOAD_EMPLOYEE_DATA_FAILURE,
} from './constants';

export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const employeesReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case LOAD_EMPLOYEE_DATA_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case LOAD_EMPLOYEE_DATA_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          data: action.data,
        });
      case LOAD_EMPLOYEE_DATA_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error,
        });
      default:
        return state;
    }
  };

export default employeesReducer;
