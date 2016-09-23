import React, { PropTypes } from 'react';
import DashboardIcon from 'grommet/components/icons/base/Dashboard';

const Logo = ({
  inverse,
}) => (
  <DashboardIcon
    size="medium"
    type="logo"
    colorIndex={inverse ? 'light-2' : 'brand'}
  />
);

Logo.propTypes = {
  inverse: PropTypes.bool.isRequired,
};

export default Logo;
