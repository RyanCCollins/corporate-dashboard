import KeyMetricsView from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { initialState as keyMetrics } from '../reducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import Heading from 'grommet-udacity/components/Heading';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';

describe('<KeyMetricsView />', () => {
  const store = mockStore({
    keyMetrics,
  });
  it('should render with expected components', () => {
    const wrapper = shallow(
      <KeyMetricsView store={store} />
    );
    expect(
      wrapper.find(<Heading />)
    ).toExist();
    expect(
      wrapper.find(<Section />)
    ).toExist();
    expect(
      wrapper.find(<Box />)
    ).toExist();
  });
});
