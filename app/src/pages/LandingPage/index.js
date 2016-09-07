import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

const LandingPage = () => (
  <div className={styles.container}>
    <Heading align="center">
      Welcome!
    </Heading>
    <Footer>
      <Button>
        Geospatial
      </Button>
      <Button>
        Key Metrics
      </Button>
      <Button>
        Data
      </Button>
    </Footer>
  </div>
);

export default cssModules(LandingPage, styles);
