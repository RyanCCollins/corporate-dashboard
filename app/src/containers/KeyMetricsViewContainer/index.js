import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as KeyMetricsViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import { LineChart } from 'components';
import { areaChartLabels } from './constants';

class KeyMetricsView extends Component {
  componentDidMount() {
    this.handleLoadingData();
  }
  handleLoadingData() {
    const {
      loadCustomerData,
    } = this.props.actions;
    loadCustomerData();
  }
  render() {
    const {
      isLoading,
      data,
      error,
    } = this.props;
    return (
      <div className={styles.keyMetricsView}>
        <Heading align="center">
          Key Metrics
        </Heading>
        {isLoading ?
          <Heading tag="h2" align="center">Loading</Heading>
        :
          <LineChart data={data} activeData={data} labels={areaChartLabels} />
        }

      </div>
    );
  }
}

KeyMetricsView.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  actions: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  data: state.keyMetrics.data,
  isLoading: state.keyMetrics.isLoading,
  error: state.keyMetrics.error,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    KeyMetricsViewActionCreators,
    dispatch
  ),
});

const Container = cssModules(KeyMetricsView, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
