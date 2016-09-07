import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GeospatialViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { EmployeeLocationChart, EmployeeTable } from 'components';

class GeospatialView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.geospatialView}>
        <EmployeeLocationChart />
        <EmployeeTable />
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
    GeospatialViewActionCreators,
    dispatch
  ),
});

const Container = cssModules(GeospatialView, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
