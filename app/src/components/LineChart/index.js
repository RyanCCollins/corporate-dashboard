import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Chart, {
  Axis,
  Layers,
  Base,
  Grid,
  Area,
  Line,
  Bar,
  Marker,
  MarkerLabel,
  HotSpots,
  Range
} from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Legend from 'grommet/components/Legend';

class LineChart extends Component {
  constructor() {
    super();
    this.setActive = this.setActive.bind(this);
    this.stateFromActive = this.stateFromActive.bind(this);
    this.state = {
      active: 0,
      activeValues: [],
      index: 1,
    };
  }
  componentDidMount() {
    const active = { start: 8, end: 16 };
    this.state = this.stateFromActive(active);
  }
  setActive({ start, end }) {
    const {
      data,
    } = this.props;
    this.setState({
      active: {
        start,
        end,
      },
      activeValues: data.slice(start, end).map(o => o.num_customers),
    });
  }
  stateFromActive(active) {
    const {
      data,
    } = this.props;
    if (!data) {
      return {};
    }
    const {
      start,
      end,
    } = active;
    const getActiveValues = () =>
      data
        .slice(start, end)
        .map(o => o.num_customers);
    const activeValues = getActiveValues();
    return {
      active,
      activeValues,
      index: (activeValues.length - 1),
    };
  }
  render() {
    const {
      labels,
      data,
    } = this.props;
    const {
      active,
      index,
      activeValues,
    } = this.state;
    return (
      <Box className={styles.lineChart}>
        <Axis
          ticks
          count={13}
          labels={labels}
        />
        <Chart vertical>
          <Base height="small" width="full" />
          <Layers>
            <Area
              min={7000}
              max={22000}
              values={data.map(i => parseInt(i.num_customers, 10))}
            />
            <Range
              count={52}
              active={active}
              onActive={(a) => this.setActive(a)}
            />
          </Layers>
        </Chart>
        <Chart vertical>
          <Base height="medium" width="full" />
          <Layers>
            <Grid rows={3} />
            <Marker vertical colorIndex="graph-2" count={activeValues.length} />
            <Bar min={7000} max={20000} values={activeValues} activeIndex={index} />
            <HotSpots
              count={activeValues.length}
              activeIndex={index}
            />
          </Layers>
        </Chart>
      </Box>
    );
  }
}

LineChart.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default cssModules(LineChart, styles);
