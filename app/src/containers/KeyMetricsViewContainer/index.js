import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as KeyMetricsViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';

class KeyMetricsView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.keyMetricsView}>
        <Heading align="center">
          Key Metrics
        </Heading>
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
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
