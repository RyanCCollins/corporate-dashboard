import {
  LOAD_EMPLOYEE_DATA_INITIATION,
  LOAD_EMPLOYEE_DATA_SUCCESS,
  LOAD_EMPLOYEE_DATA_FAILURE,
  SELECT_EMPLOYEE_INDEX,
} from './constants';

export const employeeUrl = 'http://0.0.0.0:1338/api/employees';

// loadEmployeeDataInitiation :: None -> {Action}
export const loadEmployeeDataInitiation = () => ({
  type: LOAD_EMPLOYEE_DATA_INITIATION,
});

// loadEmployeeDataSuccess :: Array -> {Action}
export const loadEmployeeDataSuccess = (data) => ({
  type: LOAD_EMPLOYEE_DATA_SUCCESS,
  data,
});

// loadEmployeeDataFailure :: Error -> {Action}
export const loadEmployeeDataFailure = (error) => ({
  type: LOAD_EMPLOYEE_DATA_FAILURE,
  error,
});

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
