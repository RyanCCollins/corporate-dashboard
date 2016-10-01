import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import { LineChart, LoadingIndicator } from 'components';
import { IssueKeyMetricsContainer } from 'containers';

class KeyMetricsView extends Component {
  render() {
    const {
      loading,
      store,
      areaChartLabels,
    } = this.props;
    return (
      <div>
        <Heading align="center">
          Key Metrics
        </Heading>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <Heading tag="h3" align="center">
              Customers (Last 12 Months)
            </Heading>
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
        <IssueKeyMetricsContainer />
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

export default connect(
  mapStateToProps,
)(ContainerWithData);
