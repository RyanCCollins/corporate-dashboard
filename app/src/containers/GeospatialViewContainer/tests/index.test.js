import GeospatialView from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { initialState as employees } from '../reducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const setup = () => {
  const store = mockStore({
    employees,
  });
  const wrapper = shallow(
    <GeospatialView store={store} />
  );
  return {
    wrapper,
    store,
  };
};

describe('<GeospatialView />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });
  it('renders with a heading h2 component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h2')).toExist();
  });
});
