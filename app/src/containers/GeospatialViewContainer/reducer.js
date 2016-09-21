import {
  SELECT_EMPLOYEE_INDEX,
  TOGGLE_MOBILE_MODE,
} from './constants';

export const initialState = {
  selectedIndex: 0,
  isMobile: false,
};

const employeesReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case SELECT_EMPLOYEE_INDEX:
        return Object.assign({}, state, {
          selectedIndex: action.index,
        });
      case TOGGLE_MOBILE_MODE:
        return Object.assign({}, state, {
          isMobile: action.isMobile,
        });
      default:
        return state;
    }
  };

export default employeesReducer;
