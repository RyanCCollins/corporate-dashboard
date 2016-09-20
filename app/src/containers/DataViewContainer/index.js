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
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class DataView extends Component {
  constructor() {
    super();
    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.handleRequestMore = this.handleRequestMore.bind(this);
    this.state = {
      isMobile: this.getWindowWidth() <= 768,
    };
  }
  componentDidMount() {
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
  handleSelectItem({ item, type }) {
    const {
      actions,
      store,
    } = this.props;
    actions.setSecondaryFilter(item, type, store.issues);
  }
  handleFiltering(type) {

  }
  handleRequestMore() {
    const {
      actions,
    } = this.props;
    actions.incrementPage();
  }
  render() {
    const {
      headers,
      currentFilter,
      filterOptions,
      secondaryFilter,
      loading,
      currentPage,
      store,
      pageIncrementor,
    } = this.props;
    const visibleIssues = store &&
    store.issues.slice(0, currentPage * pageIncrementor);
    const employees = store && store.issues.map(i => i.employee.name);
    const customers = store && store.issues.map(i => i.customer.name);
    return (
      <div className={styles.dataView}>
        <Heading align="center">
          Data View
        </Heading>
        {loading ?
          <Heading tag="h2" align="center">
            Loading...
          </Heading>
        :
          <Section>
            <FilterIssueTable
              employees={employees}
              customers={customers}
              onFilter={this.handleFiltering}
              onClearFilter={this.handleClearFilter}
              onApplyFilters={this.applyFilters}
              filter={currentFilter}
            />
            <Box align="end">
              <DataFilter
                filter={secondaryFilter}
                onSelectItem={this.handleSelectItem}
                items={filterOptions}
              />
            </Box>
            {store &&
              <IssueTable
                issues={visibleIssues} // eslint-disable-line
                headers={headers}
                isMobile={this.state.isMobile}
                isLoadingMore={loading}
                onRequestMore={this.handleRequestMore}
              />
            }
          </Section>
        }
      </div>
    );
  }
}

DataView.propTypes = {
  currentPage: PropTypes.number.isRequired,
  filteredIssues: PropTypes.array,
  employees: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  currentFilter: PropTypes.object.isRequired,
  filterOptions: PropTypes.object.isRequired,
  secondaryFilter: PropTypes.object.isRequired,
  store: PropTypes.object,
  actions: PropTypes.object.isRequired,
  pageIncrementor: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  filteredIssues: state.dataView.filteredIssues,
  headers: state.dataView.tableHeaders,
  currentFilter: state.dataView.currentFilter,
  filterOptions: state.dataView.secondaryFilter.options,
  secondaryFilter: state.dataView.secondaryFilter,
  currentPage: state.dataView.currentPage,
  pageIncrementor: state.dataView.pageIncrementor,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    DataViewActionCreators,
    dispatch
  ),
});

const MoreIssuesQuery = gql`
  query MoreIssues($offset: Int, $limit: Int) {
    store {
      issues {
        id
        submission
        closed
        status
        customer {
          ...Person
        }
        employee {
          ...Person
        }
        description
      }
    }
  }

  fragment Person on Person {
    name
    avatar
  }
`;

const ContainerWithData = graphql(MoreIssuesQuery, {
  options: (props) => ({
    variables: {
      offset: 90,
      limit: 90,
    },
  }),
  props: ({ data: { loading, store, fetchMore } }) => ({
    store,
    loading,
    loadMoreEntries: () =>
      fetchMore({
        variables: {
          offset: 90,
          limit: 90,
        },
      }),
  }),
})(DataView);

const Container = cssModules(ContainerWithData, styles);

const DataViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default DataViewContainer;
