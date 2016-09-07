import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const EmployeeLocationChart = (props) => (
  <div className={styles.employeeLocationChart}>
  </div>
);

EmployeeLocationChart.propTypes = {

};

export default cssModules(EmployeeLocationChart, styles);
