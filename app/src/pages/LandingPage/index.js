import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';

class LandingPage extends Component {
  constructor() {
    super();
    this.handleMobile = this.handleMobile.bind(this);
    this.state = {
      isMobile: false,
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleMobile);
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleMobile);
    }
  }
  handleMobile() {
    const isMobile = window.innerWidth <= 768;
    this.setState({
      isMobile,
    });
  }
  render() {
    const {
      router,
    } = this.context;
    const {
      isMobile,
    } = this.state;
    return (
      <div className={styles.container}>
        <Box pad={{ vertical: 'medium' }}>
          <Heading align="center">
            Welcome!
          </Heading>
          <Heading align="center" tag="h3">
            Choose a Page to Get Started
          </Heading>
        </Box>
        <Footer>
          <Box align="center" justify="center" full="horizontal">
            <Menu direction={isMobile ? 'column' : 'row'} responsive={false}> {/* eslint-disable */}
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
