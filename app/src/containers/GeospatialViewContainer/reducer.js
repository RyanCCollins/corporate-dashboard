import {
  SELECT_EMPLOYEE_INDEX,
} from './constants';

export const initialState = {
  selectedIndex: 0,
};

const employeesReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case SELECT_EMPLOYEE_INDEX:
        return Object.assign({}, state, {
          selectedIndex: action.index,
        });
      default:
        return state;
    }
  };

export default employeesReducer;
