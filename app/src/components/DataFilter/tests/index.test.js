import DataFilter from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import CheckBox from 'grommet-udacity/components/CheckBox';
import Status from 'grommet-udacity/components/icons/Status';
import Filter from 'grommet-udacity/components/icons/base/Filter';

describe('<DataFilter />', () => {
  it('should render with expected elements', () => {
    const filter = {
      order: 'Ascending',
      state: 'All',
      status: 'All',
      options: {
        orders: [
          'Ascending',
          'Descending',
        ],
        states: [
          'All',
          'Active',
          'Inactive',
        ],
        statuses: [
          'All',
          'Critical',
          'Warning',
        ],
      },
    };
    const wrapper = shallow(
      <DataFilter
        onSelectItem={(e) => e}
        filter={filter}
      />
    );
    expect(wrapper.find(<Menu />)).toExist();
    expect(wrapper.find(<Box />)).toExist();
    expect(wrapper.find(<Heading />)).toExist();
    expect(wrapper.find(<CheckBox />)).toExist();
    expect(wrapper.find(<Status />)).toExist();
    expect(wrapper.find(<Filter />)).toExist();
  });
});
