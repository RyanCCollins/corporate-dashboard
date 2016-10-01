import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import LinkUpIcon from 'grommet/components/icons/base/LinkUp';
import { percent } from './utils';

const OpenIssues = ({
  stats,
}) => (
  <Box className={styles.openIssues}>
    <Heading align="center">
      Open Issues
    </Heading>
    <Value
      value={percent(stats.open / stats.total)}
      units="%"
      icon={<GlobeIcon colorIndex="neutral-1" />}
      trendIcon={<LinkUpIcon colorIndex="neutral-1" />}
      label="Issue Closed"
      colorIndex="neutral-1"
    />
    <Box align="center">
      <span>
        <Value value={stats.open} />
        <span>/</span>
        <span>{stats.total}</span>
      </span>
      <Heading tag="h4" align="center">Issues open</Heading>
    </Box>
  </Box>
);

OpenIssues.propTypes = {
  stats: PropTypes.shape({
    open: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
};

export default cssModules(OpenIssues, styles);
