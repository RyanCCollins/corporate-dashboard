import IssueKeyMetrics from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { initialState as issueKeyMetrics } from '../reducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { BarChart, OpenIssues } from 'components';

describe('<IssueKeyMetrics />', () => {
  const setup = () => {
    const store = mockStore({
      issueKeyMetrics,
    });
    const wrapper = shallow(
      <IssueKeyMetrics store={store} />
    );
    return {
      wrapper,
      store,
    };
  };
  it('should have the expected DOM', () => {
    const { wrapper } = setup();
    expect(
      wrapper.find(<Section />)
    ).toExist();
    expect(
      wrapper.find(<Box />)
    ).toExist();
    expect(
      wrapper.find(<Heading />)
    ).toExist();
  });
  it('should have the expected custom components', () => {
    const { wrapper } = setup();
    expect(
      wrapper.find(<BarChart />)
    ).toExist();
    expect(
      wrapper.find(<OpenIssues />)
    ).toExist();
  });
});
