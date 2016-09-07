import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { KeyMetricsViewContainer } from 'containers';

const KeyMetricsPage = () => (
  <div className={styles.container}>
    <KeyMetricsViewContainer />
  </div>
);

export default cssModules(KeyMetricsPage, styles);
