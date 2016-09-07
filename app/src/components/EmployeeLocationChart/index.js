import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Chart, {
    Layers,
    Base,
    Grid,
    Bar,
    Marker,
    MarkerLabel,
    HotSpots,
  } from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';

const EmployeeLocationChart = ({
  sortedEmployees,
  selectedIndex,
  onSelectItem,
  currentValue,
}) => (
  <Box pad={{ horizontal: 'large', vertical: 'medium' }} align="center" justify="center">
    <Chart vertical>
      <MarkerLabel
        count={sortedEmployees.length}
        index={selectedIndex}
        label={
          <Value value={currentValue} />
        }
      />
      <Base height="medium" width="large" />
      <Layers>
        <Grid rows={3} />
        <Marker
          vertical
          colorIndex="graph-2"
          count={sortedEmployees.length}
          index={selectedIndex}
        />
        <Bar
          min={100}
          max={400}
          values={sortedEmployees.map(item => item.employees)}
          activeIndex={selectedIndex}
        />
        <HotSpots
          count={sortedEmployees.length}
          activeIndex={selectedIndex}
          onActive={(index) => onSelectItem(index)}
        />
      </Layers>
      <Box justify="between" direction="row">
        {sortedEmployees.map(item =>
          <Label size="small" className={styles.tiltLabel}>
            {item.location}
          </Label>
        )}
      </Box>
    </Chart>
  </Box>
);

EmployeeLocationChart.propTypes = {
  sortedEmployees: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
};

export default cssModules(EmployeeLocationChart, styles);
