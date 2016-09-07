import {
  LOAD_EMPLOYEE_DATA_INITIATION,
  LOAD_EMPLOYEE_DATA_SUCCESS,
  LOAD_EMPLOYEE_DATA_FAILURE,
  SELECT_EMPLOYEE_INDEX,
} from './constants';

const employeeUrl = `http://0.0.0.0:1338/api/employees`;

const loadEmployeeDataInitiation = () => ({
  type: LOAD_EMPLOYEE_DATA_INITIATION,
});

const loadEmployeeDataSuccess = (data) => ({
  type: LOAD_EMPLOYEE_DATA_SUCCESS,
  data,
});

const loadEmployeeDataFailure = (error) => ({
  type: LOAD_EMPLOYEE_DATA_FAILURE,
  error,
});

export const loadEmployeeData = () =>
  (dispatch) => {
    dispatch(
      loadEmployeeDataInitiation()
    );
    return fetch(employeeUrl)
      .then(res => res.json())
      .then(data => {
        dispatch(
          loadEmployeeDataSuccess(data)
        );
      })
      .catch(error => {
        dispatch(
          loadEmployeeDataFailure(error)
        );
      });
  };

// selectEmployeeIndex :: Int -> {Action}
const selectIndex = (index) => ({
  type: SELECT_EMPLOYEE_INDEX,
  index,
});

export const selectEmployeeIndex = (index) =>
  (dispatch) => {
    dispatch(
      selectIndex(parseInt(index, 10))
    );
  };
