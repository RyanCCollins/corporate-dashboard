import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IssueKeyMetricsActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import { BarChart } from 'components';

class IssueKeyMetrics extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      store,
      labels,
      activeIndex,
      loading,
    } = this.props;
    return (
      <Section className={styles.issueKeyMetrics}>
        {!loading &&
          <Box
            pad={{ vertical: 'small', horizontal: 'large' }}
            direction="column"
            justify="start"
            full={{ horizontal: true }}
          >
            <BarChart
              onSelectIndex={this.handleSelectIndex}
              onClearIndex={this.handleClearIndex}
              activeIndex={activeIndex}
              labels={labels}
              keyMetrics={store.keyMetrics}
            />
          </Box>
        }
      </Section>
    );
  }
}

IssueKeyMetrics.propTypes = {
  store: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  activeIndex: state.issueKeyMetrics.activeIndex,
  labels: state.issueKeyMetrics.labels,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    IssueKeyMetricsActionCreators,
    dispatch
  ),
});

const Container = cssModules(IssueKeyMetrics, styles);

const issuesForAnalysisQuery = gql`
  query KeyMetrics {
    store {
      keyMetrics {
        months {
          label
          issues
        }
        stats {
          total
          open
        }
      }
    }
  }
`;

const ContainerWithData = graphql(issuesForAnalysisQuery, {
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
