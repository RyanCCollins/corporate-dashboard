import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import _ from 'lodash';
import {
  LoadingIndicator,
  IssueTable,
  FilterIssueTable,
  DataFilter,
} from 'components';
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
    this.handleApplyFilters = this.handleApplyFilters.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.handleSearching = this.handleSearching.bind(this);
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
  handleApplyFilters() {
    const {
      actions,
      store,
    } = this.props;
    actions.applyCurrentFilter(store.issues);
  }
  handleClearFilter() {
    const {
      clearCurrentFilter,
    } = this.props.actions;
    clearCurrentFilter();
  }
  handleFiltering(type, filter) {
    const {
      setCustomFilter,
    } = this.props.actions;
    setCustomFilter(type, filter);
  }
  handleRequestMore() {
    const {
      actions,
    } = this.props;
    actions.incrementPage();
  }
  handleSearching(value) {

  }
  render() {
    const {
      headers,
      currentFilter,
      secondaryFilter,
      loading,
      currentPage,
      store,
      pageIncrementor,
      visibleIssues,
      searchValue,
    } = this.props;
    let computedVisibleIssues;
    if (!visibleIssues) {
      computedVisibleIssues = store &&
        store.issues.slice(0, currentPage * pageIncrementor);
    } else {
      computedVisibleIssues = visibleIssues.slice(0, currentPage * pageIncrementor);
    }
    const employees = store && _.uniq(store.issues.map(i => i.employee.name));
    const customers = store && _.uniq(store.issues.map(i => i.customer.name));
    return (
      <div className={styles.dataView}>
        <Heading align="center">
          Data View
        </Heading>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <FilterIssueTable
              employees={employees}
              customers={customers}
              onFilter={this.handleFiltering}
              onClearFilter={this.handleClearFilter}
              onApplyFilters={this.handleApplyFilters}
              filter={currentFilter}
            />
            {!currentFilter.isFiltering &&
              <Box
                pad={{ horizontal: 'large' }}
                align="end"
              >
                  <Search
                    dropAlign={{ right: 'right' }}
                    value={searchValue}
                    onDOMChange={this.handleSearching}
                  />
                  <DataFilter
                    filter={secondaryFilter}
                    onSelectItem={this.handleSelectItem}
                  />
              </Box>
            }
            <Box
              pad={{ vertical: 'small', horizontal: 'large' }}
              direction="column"
              justify="start"
              full={{ horizontal: true }}
            >
              <IssueTable
                issues={computedVisibleIssues}
                headers={headers}
                isMobile={this.state.isMobile}
                isLoadingMore={loading}
                onRequestMore={this.handleRequestMore}
              />
            </Box>
          </Section>
        }
      </div>
    );
  }
}

DataView.propTypes = {
  currentPage: PropTypes.number.isRequired,
  visibleIssues: PropTypes.array,
  employees: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  currentFilter: PropTypes.object.isRequired,
  secondaryFilter: PropTypes.object.isRequired,
  store: PropTypes.object,
  actions: PropTypes.object.isRequired,
  pageIncrementor: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  searchValue: PropTypes.string,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  headers: state.dataView.tableHeaders,
  currentFilter: state.dataView.currentFilter,
  secondaryFilter: state.dataView.secondaryFilter,
  currentPage: state.dataView.currentPage,
  pageIncrementor: state.dataView.pageIncrementor,
  visibleIssues: state.dataView.visibleIssues,
  searchValue: state.dataView.searchValue,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    DataViewActionCreators,
    dispatch
  ),
});

const MoreIssuesQuery = gql`
  query MoreIssues {
    store {
      issues {
        id
        submission
        closed
        status
        isActive
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
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(DataView);

const Container = cssModules(ContainerWithData, styles);

const DataViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default DataViewContainer;
