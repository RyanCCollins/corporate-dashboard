import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const EmployeeTable = (props) => (
  <div className={styles.employeeTable}>
  </div>
);

EmployeeTable.propTypes = {

};

export default cssModules(EmployeeTable, styles);
