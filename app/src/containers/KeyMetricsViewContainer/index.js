import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as KeyMetricsViewActionCreators from './actions';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import { LineChart, LoadingIndicator } from 'components';

class KeyMetricsView extends Component {
  render() {
    const {
      loading,
      store,
      areaChartLabels,
    } = this.props;
    return (
      <div className={styles.keyMetricsView}>
        <Heading align="center">
          Key Metrics
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
              <LineChart
                data={store.customers}
                labels={areaChartLabels}
              />
            </Box>
          </Section>
        }
      </div>
    );
  }
}

KeyMetricsView.propTypes = {
  store: PropTypes.array.isRequired,
  areaChartLabels: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  areaChartLabels: state.keyMetrics.areaChartLabels,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    KeyMetricsViewActionCreators,
    dispatch
  ),
});

const allCustomers = gql`
  query allCustomer {
    store {
      customers {
        week_num
        num_customers
      }
    }
  }
`;

const ContainerWithData = graphql(allCustomers, {
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(KeyMetricsView);

const Container = cssModules(ContainerWithData, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
