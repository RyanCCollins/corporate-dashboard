import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GeospatialViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { EmployeeLocationChart, EmployeeTable } from 'components';
import sortByNumber from 'utils/sortByNumber';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

class GeospatialView extends Component {
  constructor() {
    super();
    this.handleLoadingData = this.handleLoadingData.bind(this);
    this.handleChartSelection = this.handleChartSelection.bind(this);
    this.getCurrentValue = this.getCurrentValue.bind(this);
  }
  componentDidMount() {
    this.handleLoadingData();
  }
  getCurrentValue() {
    const {
      data,
      selectedIndex,
    } = this.props;
    return sortByNumber(data, 'employees')
      .map(i => i.employees)[selectedIndex];
  }
  handleLoadingData() {
    const {
      loadEmployeeData,
    } = this.props.actions;
    loadEmployeeData();
  }
  handleChartSelection(index) {
    const {
      selectEmployeeIndex,
    } = this.props.actions;
    if (typeof index !== 'undefined') {
      selectEmployeeIndex(index);
    }
  }
  render() {
    const {
      data,
      isLoading,
      error,
      selectedIndex,
    } = this.props;
    return (
      <div className={styles.geospatialView}>
        <Heading align="center">
          Geospatial View
        </Heading>
        {isLoading ?
          <h1>Loading...</h1>
        :
          <Section>
            <Box direction="row" alignContent="between" justify="center" responsive>
              <EmployeeTable employees={data} />
              <EmployeeLocationChart
                selectedIndex={selectedIndex}
                currentValue={this.getCurrentValue()}
                onSelectItem={this.handleChartSelection}
                sortedEmployees={sortByNumber(data, 'employees')}
              />
            </Box>
          </Section>
        }
      </div>
    );
  }
}

GeospatialView.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  actions: PropTypes.object.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  data: state.employees.data,
  isLoading: state.employees.isLoading,
  error: state.employees.error,
  selectedIndex: state.employees.chart.index,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    GeospatialViewActionCreators,
    dispatch
  ),
});

const Container = cssModules(GeospatialView, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
