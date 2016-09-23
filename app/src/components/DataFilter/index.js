import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import CheckBox from 'grommet/components/CheckBox';
import Status from 'grommet/components/icons/Status';
import Filter from 'grommet/components/icons/base/Filter';

const StatusLabel = ({
  status,
}) => (
  <span>
    {status !== 'All' &&
      <Status
        size="small"
        value={status.toLowerCase()}
      />
    }
    {status}
  </span>
);

const DataFilter = ({
  onSelectItem,
  filter,
}) => (
  <Menu
    className={styles.dataFilter}
    dropAlign={{ right: 'right' }}
    closeOnClick={false}
    icon={<Filter />}
  >
    <Box a11yTitle="filter" direction="column" pad="none">
      <Box
        direction="column"
        pad={{ horizontal: 'large', vertical: 'medium', between: 'medium' }}
      >
        <Heading tag="h3">Status</Heading>
        <Box direction="column" pad={{ between: 'small' }}>
          {filter.options.statuses.map((item, i) =>
            <CheckBox
              key={i}
              label={<StatusLabel status={item} />}
              checked={filter.status === item}
              onChange={() => onSelectItem({ item, type: 'status' })} // eslint-disable-line
            />
          )}
        </Box>
      </Box>
      <Box
        direction="column"
        pad={{ horizontal: 'large', vertical: 'medium', between: 'medium' }}
      >
        <Heading tag="h3">State</Heading>
        <Box direction="column" pad={{ between: 'small' }}>
          {filter.options.states.map((item, i) =>
            <CheckBox
              key={i}
              label={item}
              checked={filter.state === item}
              onChange={() => onSelectItem({ item, type: 'state' })} // eslint-disable-line
            />
          )}
        </Box>
      </Box>
      <Box
        direction="column"
        pad={{ horizontal: 'large', vertical: 'medium', between: 'medium' }}
      >
        <Heading tag="h3">Order</Heading>
        <Box direction="column" pad={{ between: 'small' }}>
          {filter.options.orders.map((item, i) =>
            <CheckBox
              key={i}
              label={item}
              checked={filter.order === item}
              onChange={() => onSelectItem({ item, type: 'order' })} // eslint-disable-line
            />
          )}
        </Box>
      </Box>
    </Box>
  </Menu>
);

DataFilter.propTypes = {
  onSelectItem: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
};

export default cssModules(DataFilter, styles);
