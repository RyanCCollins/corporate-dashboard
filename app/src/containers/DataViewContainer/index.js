import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import { IssueTable, FilterIssueTable, DataFilter } from 'components';

class DataView extends Component {
  constructor() {
    super();
    this.handleLoadingData = this.handleLoadingData.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.state = {
      isMobile: this.getWindowWidth() <= 768,
    };
  }
  componentDidMount() {
    this.handleLoadingData();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  getWindowWidth() {
    if (!window) {
      return undefined;
    }
    return window.innerWidth || document.body.clientWidth;
  }
  handleResize() {
    const width = this.getWindowWidth();
    this.setState({
      isMobile: width <= 768,
    });
  }
  handleSelectItem(item) {
    console.log(`Clicked with ${item}`);
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
      filterItems,
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
            <Box align="end">
              <DataFilter
                onSelectItem={this.handleSelectItem}
                items={filterItems}
              />
            </Box>
            <IssueTable issues={issues} headers={headers} isMobile={this.state.isMobile} />
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
  filterItems: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  issues: state.dataView.issues,
  headers: state.dataView.tableHeaders,
  error: state.dataView.error,
  isLoading: state.dataView.isLoading,
  currentFilter: state.dataView.currentFilter,
  filterItems: state.dataView.filterItems,
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
