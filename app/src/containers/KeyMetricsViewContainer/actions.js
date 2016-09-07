import {
  LOAD_CUSTOMER_DATA_INITIATION,
  LOAD_CUSTOMER_DATA_SUCCESS,
  LOAD_CUSTOMER_DATA_FAILURE,
} from './constants';

const customerUrl = `http://0.0.0.0:1338/api/customers`;

const loadCustomerDataInitiation = () => ({
  type: LOAD_CUSTOMER_DATA_INITIATION,
});

const loadCustomerDataSuccess = (data) => ({
  type: LOAD_CUSTOMER_DATA_SUCCESS,
  data,
});

const loadCustomerDataFailure = (error) => ({
  type: LOAD_CUSTOMER_DATA_FAILURE,
  error,
});

export const loadCustomerData = () =>
  (dispatch) => {
    dispatch(
      loadCustomerDataInitiation()
    );
    return fetch(customerUrl)
      .then(res => res.json())
      .then(data => {
        dispatch(
          loadCustomerDataSuccess(data)
        );
      })
      .catch(error => {
        dispatch(
          loadCustomerDataFailure(error)
        );
      });
  };
