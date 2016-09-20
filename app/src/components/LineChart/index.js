import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
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

const AXIS_LABELS = [
  { index: 0, month: 'January' },
  { index: 1, month: 'February' },
  { index: 2, month: 'March' },
  { index: 3, month: 'April' },
  { index: 4, month: 'May' },
  { index: 5, month: 'June' },
  { index: 6, month: 'June' },
  { index: 7, month: 'July' },
  { index: 8, month: 'August' },
  { index: 9, month: 'September' },
  { index: 10, month: 'October' },
  { index: 11, month: 'November' },
  { index: 12, month: 'December' },
];

const MarkerDateLabel = ({
  value,
  date,
}) => (
  <Box
    direction="row"
    pad={{ between: 'small' }}
    align="center"
  >
    <Label className="secondary">
      {date}
    </Label>
    <Value value={value} />
  </Box>
);

class LineChart extends Component {
  constructor() {
    super();
    this.setActive = this.setActive.bind(this);
    this.stateFromActive = this.stateFromActive.bind(this);
    this.handleSetIndex = this.handleSetIndex.bind(this);
    this.dateForIndex = this.dateForIndex.bind(this);
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
  handleSetIndex(index) {
    const {
      activeValues,
    } = this.state;
    this.setState({
      index: undefined === index ? activeValues.length - 1 : index,
    });
  }
  dateForIndex(index) {
    const label = AXIS_LABELS[index];
    return `${label.month}`;
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
          <MarkerLabel
            count={activeValues.length}
            index={index}
            label={
              <MarkerDateLabel
                value={activeValues[index]}
                date={this.dateForIndex(active.start + index)}
              />
            }
          />
          <Base height="medium" width="full" />
          <Layers>
            <Grid rows={3} />
            <Marker
              vertical
              colorIndex="graph-2"
              count={activeValues.length}
              index={index}
            />
            <Bar
              min={7000}
              max={20000}
              values={activeValues}
              activeIndex={index}
            />
            <HotSpots
              count={activeValues.length}
              activeIndex={index}
              onActive={this.handleSetIndex}
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
