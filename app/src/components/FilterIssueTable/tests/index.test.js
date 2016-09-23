import FilterIssueTable from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Section from 'grommet/components/Section';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/button';
import Close from 'grommet/components/icons/base/Close';
import Footer from 'grommet/components/Footer';

const mockFn = (e) => e;

describe('<FilterIssueTable />', () => {
  const wrapper = shallow(
    <FilterIssueTable
      employees={[]}
      customers={[]}
      onFilter={mockFn}
      filter={{
        employee: 'All',
        customer: 'All',
        isFiltering: false,
      }}
      onApplyFilters={mockFn}
      onClearFilter={mockFn}
      isFiltering
    />
  );
  it('should render with grommet components', () => {
    expect(wrapper.find(Section)).toExist();
    expect(wrapper.find(Menu)).toExist();
    expect(wrapper.find(Button)).toExist();
    expect(wrapper.find(Close)).toExist();
    expect(wrapper.find(Footer)).toExist();
  });
});
