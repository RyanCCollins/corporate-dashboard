import DataViewContainer from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as dataView } from '../reducer';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import {
  LoadingIndicator,
  IssueTable,
  FilterIssueTable,
  DataFilter,
  SearchBar,
} from 'components';

describe('<DataViewContainer />', () => {
  describe('Component DOM tests', () => {
    const store = mockStore({ dataView });
    const wrapper = shallow(<DataViewContainer store={store} />);
    it('should render with expected grommet DOM', () => {
      expect(wrapper.find(<Heading />)).toExist();
      expect(wrapper.find(<Section />)).toExist();
      expect(wrapper.find(<Box />)).toExist();
    });
    it('should render with expected custom components', () => {
      expect(wrapper.find(<LoadingIndicator />)).toExist();
      expect(wrapper.find(<IssueTable />)).toExist();
      expect(wrapper.find(<FilterIssueTable />)).toExist();
      expect(wrapper.find(<DataFilter />)).toExist();
      expect(wrapper.find(<SearchBar />)).toExist();
    });
  });
});
