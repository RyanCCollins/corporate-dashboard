import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Chart, {
  Axis,
  Layers,
  Base,
  Marker,
  Meter,
  MarkerLabel,
} from 'grommet/components/chart/Chart';

const BarChart = ({
  keyMetrics,
  onSelectIndex,
  onClearIndex,
  activeIndex,
  labels,
}) => (
  <div className={styles.barChart}>
    <Chart vertical={false} verticalAlignWith="meter-1-id">
      <Axis
        vertical
        ticks
        count={5}
        labels={labels}
      />
      <Layers>
        <Marker
          max={100}
          min={0}
          value={90}
          colorIndex="90%"
        />
      </Layers>
      <Base>
        {keyMetrics.months.map((item, i) =>
          <Box
            key={i}
            direction="column"
            align="center"
            pad={{ horizontal: 'small' }}
            onMouseOver={() => onSelectIndex(i)}
            onMouseOut={() => onClearIndex()}
          >
            <Value value={item.value} active={activeIndex === i} />
            <Meter
              id={i === 0 ? 'meter-1-id' : undefined}
              vertical
              label={false}
              max={100}
              min={0}
              value={item.issues}
              active={activeIndex === i}
            />
            <Label margin="small">{item.label}</Label>
          </Box>
        )}
      </Base>
      <MarkerLabel
        vertical
        label="90%"
        value={90}
        colorIndex="critical"
      />
    </Chart>
  </div>
);

BarChart.propTypes = {
  data: PropTypes.object.isRequired,
  onSelectIndex: PropTypes.func.isRequired,
  onClearIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
};

BarChart.defaultProps = {
  activeIndex: 0,
};

export default cssModules(BarChart, styles);
