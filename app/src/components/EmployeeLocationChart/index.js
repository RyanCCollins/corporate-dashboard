import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
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
import Value from 'grommet/components/Value';

const VerticalLabel = ({
  label,
}) => (
  <span className={styles.tiltLabel}>
    {label}
  </span>
);

const EmployeeLocationChart = ({
  sortedEmployees,
  selectedIndex,
  onSelectItem,
  currentValue,
  isMobile,
}) => (
  <Box
    pad={{ horizontal: 'large', vertical: 'medium' }}
    align="center"
    justify="center"
  >
    <Chart vertical={false} full>
      <Axis
        vertical
        ticks
        count={3}
        labels={[
          { index: 0, label: '0' },
          { index: 1, label: '200' },
          { index: 2, label: '400' },
        ]}
      />
      <Chart vertical full>
        <MarkerLabel
          count={sortedEmployees.length}
          index={selectedIndex}
          label={
            <Value value={currentValue} />
          }
        />
      <Base height="medium" width="full" />
        <Layers>
          <Grid rows={3} columns={4} />
          <Marker
            vertical
            colorIndex="graph-2"
            count={sortedEmployees.length}
            index={selectedIndex}
          />
          <Bar
            min={100}
            max={400}
            values={sortedEmployees.map(item => item.numemployees)}
            activeIndex={selectedIndex}
          />
          <HotSpots
            count={sortedEmployees.length}
            activeIndex={selectedIndex}
            onActive={(index) => onSelectItem(index)}
          />
        </Layers>
        <Axis
          ticks
          count={sortedEmployees.length}
          labels={isMobile ? null :
            sortedEmployees.map((item, index) =>
              ({
                index,
                label: <VerticalLabel label={item.location.slice(0, 5)} />,
              })
          )}
        />
      </Chart>
    </Chart>
  </Box>
);

EmployeeLocationChart.propTypes = {
  sortedEmployees: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

EmployeeLocationChart.defaultProps = {
  isMobile: true,
};

export default cssModules(EmployeeLocationChart, styles);
