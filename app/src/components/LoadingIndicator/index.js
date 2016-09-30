import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const LoadingIndicator = ({
  isLoading,
  message,
}) => (
  <Box
    align="center"
    justify="center"
    className={styles.loadingIndicator}
  >
    {isLoading &&
      <Box
        align="center"
        justify="center"
      >
        <Heading tag="h2" align="center">{message}</Heading>
        <Spinning />
      </Box>
    }
  </Box>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

LoadingIndicator.defaultProps = {
  isLoading: true,
  message: 'Loading',
};

export default cssModules(LoadingIndicator, styles);
