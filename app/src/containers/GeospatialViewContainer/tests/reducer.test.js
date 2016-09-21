import expect from 'expect';
import employeesReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('geospatialViewReducer', () => {
  it('returns the initial state', () => {
    expect(
      employeesReducer(undefined, {})
    ).toEqual(initialState);
  });
});
