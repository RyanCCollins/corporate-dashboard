import expect from 'expect';
import employeesReducer from '../reducer';
import { initialState } from '../reducer';
import {
  LOAD_EMPLOYEE_DATA_INITIATION,
  LOAD_EMPLOYEE_DATA_SUCCESS,
  LOAD_EMPLOYEE_DATA_FAILURE,
} from '../constants';

describe('geospatialViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      employeesReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('sets isLoading to true', () => {
    const stateAfter = {
      isLoading: true,
      data: [],
      error: null,
    };
    expect(
      employeesReducer(initialState, {
        type: LOAD_EMPLOYEE_DATA_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('stops loading on success', () => {
    const stateAfter = {
      isLoading: false,
      data: [],
      error: null,
    };
    expect(
      employeesReducer(initialState, {
        type: LOAD_EMPLOYEE_DATA_SUCCESS,
        data: [],
      })
    ).toEqual(stateAfter);
  });
  it('loads data when successful', () => {
    const data = [
      {
        _id: '57d02b4e2742984e15e0b805',
        employees: 293,
        location: 'Norwood',
      },
      {
        _id: '57d02b4eafd9fad06655b484',
        employees: 166,
        location: 'Carrsville',
      },
    ];
    const stateAfter = {
      isLoading: false,
      data,
      error: null,
    };
    expect(
      employeesReducer(initialState, {
        type: LOAD_EMPLOYEE_DATA_SUCCESS,
        data,
      })
    ).toEqual(stateAfter);
  });
  it('stops loading on failure', () => {
    const stateAfter = {
      isLoading: false,
      data: [],
      error: null,
    };
    expect(
      employeesReducer(initialState, {
        type: LOAD_EMPLOYEE_DATA_FAILURE,
      })
    ).toEqual(stateAfter);
  });
  it('assigns an error if unsuccessful', () => {
    const error = { message: 'An error occured 🤔' };
    const stateAfter = {
      isLoading: false,
      error,
      data: [],
    };
    expect(
      employeesReducer(initialState, {
        type: LOAD_EMPLOYEE_DATA_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
});
