import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { GeospatialViewContainer } from 'containers';

const GeoSpatialPage = () => (
  <div className={styles.container}>
    <GeospatialViewContainer />
  </div>
);

export default cssModules(GeoSpatialPage, styles);
