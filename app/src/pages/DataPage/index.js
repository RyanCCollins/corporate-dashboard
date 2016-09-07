import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { DataViewContainer } from 'containers';

const DataPage = () => (
  <div className={styles.container}>
    <DataViewContainer />
  </div>
);

export default cssModules(DataPage, styles);
