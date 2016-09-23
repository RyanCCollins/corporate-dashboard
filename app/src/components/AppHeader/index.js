import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import { Logo } from 'components';


const AppHeader = ({
  onToggleNav,
}) => (
  <Header
    justify="between"
    pad={{ horizontal: 'medium' }}
    large
  >
    <Title onClick={onToggleNav}>
      <Logo inverse />
      Dashboard
    </Title>
    <Menu responsive={false} className={styles.navCloser}>
      <Button
        plain
        icon={<CloseIcon />}
        onClick={onToggleNav}
      />
    </Menu>
  </Header>
);

AppHeader.propTypes = {
  onToggleNav: PropTypes.func.isRequired,
};


export default cssModules(AppHeader, styles);
