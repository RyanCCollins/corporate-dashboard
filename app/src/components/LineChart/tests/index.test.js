import LineChart from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Chart, {
  Axis,
  Layers,
  Base,
  Grid,
  Area,
  Bar,
  Marker,
  HotSpots,
  Range,
  MarkerLabel,
} from 'grommet/components/chart/Chart';

describe('<LineChart />', () => {
  const areaChartLabels = [
    {
      index: 0,
      label: '0',
    },
    {
      index: 1,
      label: '4',
    },
  ];
  const data = [
    { num_customers: 21392, week_num: 47 },
    { num_customers: 11992, week_num: 48 },
  ];
  const wrapper = shallow(
    <LineChart labels={areaChartLabels} data={data} />
  );
  it('should render the expected components', () => {
    expect(
      wrapper.find(<Box />)
    ).toExist();
    expect(
      wrapper.find(<Value />)
    ).toExist();
    expect(
      wrapper.find(<Label />)
    ).toExist();
    expect(
      wrapper.find(<Chart />)
    ).toExist();
  });
  it('should render with the expected chart elements', () => {
    expect(
      wrapper.find(<Marker />)
    ).toExist();
    expect(
      wrapper.find(<HotSpots />)
    ).toExist();
    expect(
      wrapper.find(<Axis />)
    ).toExist();
    expect(
      wrapper.find(<Range />)
    ).toExist();
    expect(
      wrapper.find(<MarkerLabel />)
    ).toExist();
    expect(
      wrapper.find(<Base />)
    ).toExist();
    expect(
      wrapper.find(<Bar />)
    ).toExist();
    expect(
      wrapper.find(<Area />)
    ).toExist();
    expect(
      wrapper.find(<Grid />)
    ).toExist();
    expect(
      wrapper.find(<Layers />)
    ).toExist();
  });
});
