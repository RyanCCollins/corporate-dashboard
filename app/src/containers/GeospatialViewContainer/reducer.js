import {
  LOAD_EMPLOYEE_DATA_INITIATION,
  LOAD_EMPLOYEE_DATA_SUCCESS,
  LOAD_EMPLOYEE_DATA_FAILURE,
  SELECT_EMPLOYEE_INDEX,
} from './constants';

export const initialState = {
  selectedIndex: 0,
  error: null,
  isLoading: false,
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
        });
      case LOAD_EMPLOYEE_DATA_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error,
        });
      case SELECT_EMPLOYEE_INDEX:
        return Object.assign({}, state, {
          selectedIndex: action.index,
        });
      default:
        return state;
    }
  };

export default employeesReducer;
