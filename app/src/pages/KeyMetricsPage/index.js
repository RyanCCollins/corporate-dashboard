import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { KeyMetricsView } from 'containers';

const KeyMetricsPage = () => (
  <div className={styles.container}>
    <KeyMetricsView />
  </div>
);

export default cssModules(KeyMetricsPage, styles);
