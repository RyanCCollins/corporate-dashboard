import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('GeospatialView actions', () => {
  it('has a type of LOAD_EMPLOYEE_DATA_INITIATION', () => {
    const expectedAction = {
      type: types.LOAD_EMPLOYEE_DATA_INITIATION,
    };
    expect(
      actions.loadEmployeeDataInitiation()
    ).toEqual(expectedAction);
  });
  it('has a type of LOAD_EMPLOYEE_DATA_SUCCESS', () => {
    const data = [{}, {}, {}];
    const expectedAction = {
      type: types.LOAD_EMPLOYEE_DATA_SUCCESS,
      data,
    };
    expect(
      actions.loadEmployeeDataSuccess(data)
    ).toEqual(expectedAction);
  });
  it('has a type of LOAD_EMPLOYEE_DATA_FAILURE', () => {
    const error = new Error('An error occured');
    const expectedAction = {
      type: types.LOAD_EMPLOYEE_DATA_FAILURE,
      error,
    };
    expect(
      actions.loadEmployeeDataFailure(error)
    ).toEqual(expectedAction);
  });
  it('has a type of SELECT_EMPLOYEE_INDEX', () => {
    const index = 1;
    const expectedAction = {
      type: types.SELECT_EMPLOYEE_INDEX,
      index,
    };
    expect(
      actions.selectIndex(index)
    ).toEqual(expectedAction);
  });
  describe('Async actions', () => {
    it('creates LOAD_EMPLOYEE_DATA_SUCCESS after completion of initial action', () => {
      const data = [{}, {}, {}];
      nock(actions.employeeUrl)
        .get()
        .reply(200, { data });

      const expectedActions = [
        { type: types.LOAD_EMPLOYEE_DATA_INITIATION },
        { type: types.LOAD_EMPLOYEE_DATA_SUCCESS, data },
      ];
      const store = mockStore({ data: [] });
      return store.dispatch(actions.loadEmployeeData())
        .then(() => {
          expect( // test that the mock store got the async actions.
            store.getActions()
          ).toEqual(expectedActions);
        });
    });
  });
});
