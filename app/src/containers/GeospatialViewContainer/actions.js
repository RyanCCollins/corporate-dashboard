import {
  SELECT_EMPLOYEE_INDEX,
} from './constants';

// selectIndex :: Int -> {Action}
export const selectIndex = (index) => ({
  type: SELECT_EMPLOYEE_INDEX,
  index,
});

// selectEmployeeIndex :: Int -> Func -> {Action}
export const selectEmployeeIndex = (index) =>
  (dispatch) => {
    dispatch(
      selectIndex(parseInt(index, 10))
    );
  };
