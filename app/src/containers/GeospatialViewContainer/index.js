import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GeospatialViewActionCreators from './actions';
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
    this.handleChartSelection = this.handleChartSelection.bind(this);
    this.getCurrentValue = this.getCurrentValue.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleMobileToggle = this.handleMobileToggle.bind(this);
    this.state = {
      isMobile: true,
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
      this.handleMobileToggle();
    }
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
    if (typeof window !== 'undefined') {
      this.handleMobileToggle();
    }
  }
  handleMobileToggle() {
    const isMobile = window.innerWidth <= 800;
    this.setState({
      isMobile,
    });
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
      selectedIndex,
    } = this.props;
    const {
      isMobile,
    } = this.state;
    return (
      <div>
        <Heading tag="h1" align="center">
          Geospatial View
        </Heading>
        <Heading tag="h3" align="center">
          Number of Employees per Location
        </Heading>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <Box
              pad={{ vertical: 'small', horizontal: 'large' }}
              direction="column"
              justify="start"
              full={{ horizontal: true }}
            >
              <EmployeeLocationChart
                selectedIndex={selectedIndex}
                isMobile={isMobile}
                currentValue={this.getCurrentValue()}
                onSelectItem={this.handleChartSelection}
                sortedEmployees={sortByNumber(store.employees, 'numemployees')}
              />
            </Box>
            <Box alignContent="between" justify="center">
              <EmployeeTable
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  selectedIndex: state.employees.selectedIndex,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    GeospatialViewActionCreators,
    dispatch
  ),
});

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
})(GeospatialView);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
