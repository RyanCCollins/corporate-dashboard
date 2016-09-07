import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';

class DataView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.dataView}>
        <Heading align="center">
          Data View
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
    DataViewActionCreators,
    dispatch
  ),
});

const Container = cssModules(DataView, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
