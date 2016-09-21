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
import isMobileCheck from 'utils/isMobile';

class GeospatialView extends Component {
  constructor() {
    super();
    this.handleChartSelection = this.handleChartSelection.bind(this);
    this.getCurrentValue = this.getCurrentValue.bind(this);
    this.handleSetMobile = this.handleSetMobile.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
    }
    const mobileMode = isMobileCheck();
    this.handleSetMobile(mobileMode);
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  }
  getCurrentValue() {
    const {
      store,
      selectedIndex,
    } = this.props;
    return sortByNumber(store.employees, 'numemployees')
      .map(i => i.numemployees)[selectedIndex];
  }
  handleResize() {
    const mobileMode = isMobileCheck();
    this.handleSetMobile(mobileMode);
  }
  handleChartSelection(index) {
    const {
      selectEmployeeIndex,
    } = this.props.actions;
    if (typeof index !== 'undefined') {
      selectEmployeeIndex(index);
    }
  }
  handleSetMobile(mobile) {
    const {
      toggleMobileMode,
    } = this.props.actions;
    toggleMobileMode(mobile);
  }
  render() {
    const {
      store,
      loading,
      selectedIndex,
      isMobile,
    } = this.props;
    return (
      <div className={styles.geospatialView}>
        <Heading tag="h1" align="center">
          Geospatial View
        </Heading>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <Box direction="row" alignContent="between" justify="center">
              <EmployeeLocationChart
                selectedIndex={selectedIndex}
                currentValue={this.getCurrentValue()}
                onSelectItem={this.handleChartSelection}
                sortedEmployees={sortByNumber(store.employees, 'numemployees')}
              />
            </Box>
            <Box direction="row" alignContent="between" justify="center">
              <EmployeeTable
                isMobile={isMobile}
                employees={store.employees}
                selectedIndex={selectedIndex}
                onSelectItem={this.handleChartSelection}
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
  actions: PropTypes.object.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  selectedIndex: state.employees.selectedIndex,
  isMobile: state.employees.isMobile,
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
  query allEmployees {
    store {
      employees {
        id
        numemployees
        location
      }
    }
  }
`;

const ContainerWithData = graphql(allEmployees, {
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
