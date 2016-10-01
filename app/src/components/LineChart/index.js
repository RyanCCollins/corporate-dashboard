import React, { PropTypes, Component } from 'react';
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
import { labels as AXIS_LABELS } from './constants';

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
    this.setHotSpot = this.setHotSpot.bind(this);
    this.setMobileState = this.setMobileState.bind(this);
    this.handleSetIndex = this.handleSetIndex.bind(this);
    this.dateForIndex = this.dateForIndex.bind(this);
    this.state = {
      active: { start: 0, end: 8 },
      activeValues: [],
      index: 1,
      isMobile: false,
      activeHotSpot: 0,
    };
  }
  componentDidMount() {
    const {
      active,
    } = this.state;
    this.setMobileState();
    this.setActive(active);
    window.addEventListener('resize', this.setMobileState);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setMobileState);
  }
  setMobileState() {
    const isMobile = window && window.innerWidth <= 768;
    this.setState({
      isMobile,
    });
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
  setHotSpot(index) {
    this.setState({
      activeHotSpot: index,
    });
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
    if (index) {
      const adjustedIndex = index > 4 ? (parseInt(index / 4, 10)) : 0;
      return `${AXIS_LABELS[adjustedIndex].month}`;
    }
    return '';
  }
  render() {
    const {
      labels,
      data,
    } = this.props;
    const {
      active,
      index,
      isMobile,
      activeValues,
      activeHotSpot,
    } = this.state;
    const calculatedValue = isMobile && data[activeHotSpot] ?
      data[activeHotSpot].num_customers : 0;
    return (
      <Box>
        <Axis
          ticks
          count={13}
          labels={labels}
        />
        <Chart vertical>
          {isMobile &&
            <MarkerLabel
              count={52}
              index={activeHotSpot}
              label={
                <Value
                  value={calculatedValue}
                />
              }
            />
          }
          <Base height="small" width="full" />
          <Layers>
            {isMobile &&
              <Marker
                vertical
                colorIndex="graph-2"
                count={52}
                index={activeHotSpot}
              />
            }
            <Area
              min={7000}
              max={22000}
              values={data.map(i => parseInt(i.num_customers, 10))}
            />
          {!isMobile ?
            <Range
              count={52}
              active={active}
              onActive={(a) => this.setActive(a)}
            />
          :
            <HotSpots
              count={52}
              activeIndex={activeHotSpot}
              onClick={(a) => this.setHotSpot(a)}
              onActive={(a) => this.setHotSpot(a)}
            />
          }
          </Layers>
        </Chart>
        {!isMobile &&
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
        }
      </Box>
    );
  }
}

LineChart.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default LineChart;
