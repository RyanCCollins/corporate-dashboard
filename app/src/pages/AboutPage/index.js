import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { AboutInfo } from 'components';

const AboutPage = () => (
  <div className={styles.container}>
    <Section>
      <Box>
        <Heading align="center">
          About
        </Heading>
      </Box>
      <AboutInfo />
    </Section>
  </div>
);

export default cssModules(AboutPage, styles);
