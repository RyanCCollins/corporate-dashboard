import EmployeeLocationChart from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Box from 'grommet/components/Box';
import Chart,
{
  Layers,
  Base,
  Grid,
  Bar,
  Marker,
  MarkerLabel,
  HotSpots,
  Axis,
} from 'grommet/components/chart/Chart';

describe('<EmployeeLocationChart />', () => {
  const wrapper = shallow(
    <EmployeeLocationChart
      sortedEmployees={[]}
      selectedIndex={1}
      onSelectItem={(e) => e}
      currentValue={1}
    />
  );
  it('renders with a surrounding box', () => {
    expect(wrapper.find(Box)).toExist();
  });
  it('renders with a chart', () => {
    expect(wrapper.find(Chart)).toExist();
  });
  it('renders all chart components', () => {
    expect(wrapper.find(Layers)).toExist();
    expect(wrapper.find(Base)).toExist();
    expect(wrapper.find(Grid)).toExist();
    expect(wrapper.find(Bar)).toExist();
    expect(wrapper.find(Marker)).toExist();
    expect(wrapper.find(MarkerLabel)).toExist();
    expect(wrapper.find(HotSpots)).toExist();
    expect(wrapper.find(Axis)).toExist();
  });
});
