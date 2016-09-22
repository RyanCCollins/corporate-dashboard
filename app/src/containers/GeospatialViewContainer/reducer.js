import {
  SELECT_EMPLOYEE_INDEX,
} from './constants';
import update from 'react-addons-update';

export const initialState = {
  selectedIndex: 0,
};

const employeesReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case SELECT_EMPLOYEE_INDEX:
        return update(state, {
          selectedIndex: {
            $set: action.index,
          },
        });
      default:
        return state;
    }
  };

export default employeesReducer;
