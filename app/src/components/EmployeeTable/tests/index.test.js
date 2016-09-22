import EmployeeTable from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

describe('<EmployeeTable />', () => {
  const employees = [
    {
      id: '57d02b4eafd9fad06655b484',
      location: 'Carrsville',
      numemployees: 166,
    },
    {
      id: '57d02b4e737be284278d187d',
      location: 'Frystown',
      numemployees: 176,
    },
  ];
  const wrapper = shallow(
    <EmployeeTable
      employees={employees}
      onSelectItem={(e) => e}
      selectedIndex={1}
    />
  );
  it('should render with a surrounding Box', () => {
    expect(wrapper.find(Box)).toExist();
  });
  it('should render a Table with TableRow', () => {
    expect(wrapper.find(Table)).toExist();
    expect(wrapper.find(TableRow)).toExist();
  });
});
