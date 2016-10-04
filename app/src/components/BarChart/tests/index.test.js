import BarChart from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Value from 'grommet-udacity/components/Value';
import Label from 'grommet-udacity/components/Label';
import Box from 'grommet-udacity/components/Box';
import Meter from 'grommet-udacity/components/Meter';
import Chart, {
  Axis,
  Layers,
  Base,
  Marker,
  MarkerLabel,
} from 'grommet-udacity/components/chart/Chart';

describe('<BarChart />', () => {
  const wrapper = shallow(
    <BarChart
      keyMetrics={{
        months: [
          { label: 'January', issues: 80 },
          { label: 'February', issues: 80 },
          { label: 'March', issues: 80 },
        ],
        stats: {
          total: 300,
          open: 122,
        },
      }}
      onSelectIndex={(e) => e}
      onClearIndex={(e) => e}
      activeIndex={0}
      labels={[
        { index: 0, label: '0' },
        { index: 2, label: '50' },
        { index: 4, label: '100' },
      ]}
    />
  );
  it('should have the expected components', () => {
    expect(
      wrapper.find(<Value />)
    ).toExist();
    expect(
      wrapper.find(<Label />)
    ).toExist();
    expect(
      wrapper.find(<Box />)
    ).toExist();
    expect(
      wrapper.find(<Meter />)
    ).toExist();
    expect(
      wrapper.find(<Chart />)
    ).toExist();
  });
  it('should render with the proper chart component', () => {
    expect(
      wrapper.find(<Axis />)
    ).toExist();
    expect(
      wrapper.find(<Base />)
    ).toExist();
    expect(
      wrapper.find(<Layers />)
    ).toExist();
    expect(
      wrapper.find(<Marker />)
    ).toExist();
    expect(
      wrapper.find(<MarkerLabel />)
    ).toExist();
  });
});
