import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import CheckBox from 'grommet/components/CheckBox';
import Filter from 'grommet/components/icons/base/Filter';

const DataFilter = ({
  items,
}) => (
  <Menu
    className={styles.dataFilter}
    dropAlign={{ right: 'right' }}
    icon={<Filter />}
  >
    <Box a11yTitle="filter" direction="column" pad="none">
      <Box
        direction="column"
        pad={{ horizontal: 'large', vertical: 'medium', between: 'medium' }}
      >
        <Heading tag="h3">
          Status
        </Heading>
        <Box direction="column" pad={{ between: 'small' }}>
          {items.statuses.map((item, i) =>
            <CheckBox key={i} label={item} />
          )}
        </Box>
      </Box>
      <Box
        direction="column"
        pad={{ horizontal: 'large', vertical: 'medium', between: 'medium' }}
      >
        <Heading tag="h3">
          State
        </Heading>
        <Box direction="column" pad={{ between: 'small' }}>
          {items.states.map((item, i) =>
            <CheckBox key={i} label={item} />
          )}
        </Box>
      </Box>
      <Box
        direction="column"
        pad={{ horizontal: 'large', vertical: 'medium', between: 'medium' }}
      >
        <Heading tag="h3">
          Order
        </Heading>
        <Box direction="column" pad={{ between: 'small' }}>
          {items.orders.map((item, i) =>
            <CheckBox key={i} label={item} />
          )}
        </Box>
      </Box>
    </Box>
  </Menu>
);

DataFilter.propTypes = {
  items: PropTypes.object.isRequired,
};

export default cssModules(DataFilter, styles);
