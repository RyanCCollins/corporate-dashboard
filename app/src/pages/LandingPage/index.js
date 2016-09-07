import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';

class LandingPage extends Component {
  render() {
    const {
      router,
    } = this.context;
    return (
      <div className={styles.container}>
        <Heading align="center">
          Welcome!
        </Heading>
        <Footer>
          <Box align="center" justify="center" full="horizontal">
            <Menu direction="row"> {/* eslint-disable */}
              <Button onClick={() => router.push('/geo-spatial')}>
                Geospatial
              </Button>
              <Button onClick={(e) => router.push('/key-metrics')}>
                Key Metrics
              </Button>
              <Button onClick={(e) => router.push('/data')}>
                Data
              </Button> {/* eslint-enable */}
            </Menu>
          </Box>
        </Footer>
      </div>
    );
  }
}

LandingPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default cssModules(LandingPage, styles);
