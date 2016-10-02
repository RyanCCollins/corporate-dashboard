import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Markdown from 'grommet/components/Markdown';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';

const AboutInfo = () => (
  <Section pad={{ vertical: 'large', horizontal: 'large' }}>
    <Box
      align="center"
      alignContent="center"
      focusable="false"
      justify="center"
      pad={{ vertical: 'small' }}
      colorIndex="light-1"
    >
      <Card
        label="Behind the project"
        heading="Corporate Dashboard"
        description={
        <Markdown
          content={`A corporate dashboard / analytic application built
                    with a focus on UI / UX, performance and component
                    oriented design.  Built with React, Redux, Grommet UX
                    and GraphQL.`}
        />
        }
      />
    </Box>
    <Section pad={{ vertical: 'large', horizontal: 'large' }}>
      <Heading align="center" tag="h1">
        {'Who\'s Behind All This?'}
      </Heading>
      <Box
        align="center"
        alignContent="center"
        focusable="false"
        justify="center"
        pad={{ vertical: 'large' }}
        colorIndex="light-1"
      >
        <img
          src="https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true"
          alt="Ryan Collins, Full Stack Developer"
          className={styles.avatar}
        />
        <Box
          align="center"
          alignContent="center"
          focusable="false"
          justify="center"
          pad={{ vertical: 'large', horizontal: 'large' }}
          colorIndex="light-1"
        >
          <Heading tag="h2" align="center">
            Ryan Collins
          </Heading>
          <Heading tag="h3" align="center">
            Web Techologist, Full Stack Engineer
          </Heading>
          <Heading tag="h5" align="center">
            Experienced engineer specializing in implementing
            cutting-edge technologies
            <br />
            in a multitude of domains,
            including Front End web, UI / UX, et. al.
          </Heading>
        </Box>
      </Box>
      <Footer>
        <Box
          pad="medium"
          align="center"
          justify="center"
          focusable={false}
          style={{ minHeight: 100 }}
          full="horizontal"
        >
          <Anchor href="mailto:admin@ryancollins.io">
            <Button
              onClick={(a) => a} // eslint-disable-line react/jsx-no-bind
              a11yTitle="Contact Me"
              label="Contact Me"
            />
          </Anchor>
        </Box>
      </Footer>
    </Section>
  </Section>
);

export default cssModules(AboutInfo, styles);
