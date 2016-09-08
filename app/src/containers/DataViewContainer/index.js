import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import { IssueTable, FilterIssueTable } from 'components';

class DataView extends Component {
  constructor() {
    super();
    this.handleLoadingData = this.handleLoadingData.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
  }
  componentDidMount() {
    this.handleLoadingData();
  }
  handleFiltering(type) {
    switch (type) {
      case expression:

        break;
      default:

    }
  }
  handleLoadingData() {
    const {
      loadIssueData,
    } = this.props.actions;
    loadIssueData();
  }
  render() {
    const {
      issues,
      isLoading,
      error,
      headers,
      currentFilter,
    } = this.props;
    return (
      <div className={styles.dataView}>
        <Heading align="center">
          Data View
        </Heading>
        {isLoading ?
          <Heading tag="h2" align="center">
            Loading...
          </Heading>
        :
          <Section>
            <FilterIssueTable
              statuses={['Active', 'Inactive']}
              employees={issues.map(i => i.employee.name)}
              customers={issues.map(i => i.customer.name)}
              orders={['Ascending Date', 'Descending Date']}
              onFilter={this.handleFiltering}
              onClearFilter={this.handleClearFilter}
              onApplyFilters={this.applyFilters}
              filter={currentFilter}
            />
            <IssueTable issues={issues} headers={headers} />
          </Section>
        }
      </div>
    );
  }
}

DataView.propTypes = {
  actions: PropTypes.object.isRequired,
  issues: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  currentFilter: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  issues: state.dataView.issues,
  headers: state.dataView.tableHeaders,
  error: state.dataView.error,
  isLoading: state.dataView.isLoading,
  currentFilter: state.dataView.currentFilter,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    DataViewActionCreators,
    dispatch
  ),
});

const Container = cssModules(DataView, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
