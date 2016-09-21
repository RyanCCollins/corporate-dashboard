import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GeospatialViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { EmployeeLocationChart, EmployeeTable, LoadingIndicator } from 'components';
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
      store,
      selectedIndex,
    } = this.props;
    return sortByNumber(store.employees, 'employees')
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
      store,
      loading,
      error,
      selectedIndex,
    } = this.props;
    return (
      <div className={styles.geospatialView}>
        <Heading align="center">
          Geospatial View
        </Heading>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <Box direction="row" alignContent="between" justify="center" responsive>
              <EmployeeTable employees={store.employees} />
              <EmployeeLocationChart
                selectedIndex={selectedIndex}
                currentValue={this.getCurrentValue()}
                onSelectItem={this.handleChartSelection}
                sortedEmployees={sortByNumber(store.employees, 'employees')}
              />
            </Box>
          </Section>
        }
      </div>
    );
  }
}

GeospatialView.propTypes = {
  store: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  actions: PropTypes.object.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
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

const allEmployees = gql`
  query allCustomer {
    store {
      employees {
        id
        numemployees
        location
      }
    }
  }
`;

const ContainerWithData = graphql(allCustomer, {
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
