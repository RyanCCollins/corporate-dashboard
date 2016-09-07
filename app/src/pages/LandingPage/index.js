import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { GeoSpatialViewContainer } from 'containers';

const LandingPage = (props) => (
  <div className={styles.container}>
    <GeoSpatialViewContainer />
  </div>
);

export default cssModules(LandingPage, styles);
