import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import CloseIcon from 'grommet/components/icons/base/Close';
import { Link } from 'react-router';
import { Logo } from 'components';

class SidebarNav extends Component {
  constructor() {
    super();
    this.renderMenu = this.renderMenu.bind(this);
  }
  renderMenu() {
    const {
      onToggleNav,
    } = this.props;
    return (
      <Sidebar size="medium" colorIndex="neutral-1" fixed seperator="right">
        <Header justify="between" pad={{ horizontal: 'medium' }} large>
          <Title>
            <Logo inverse />
            <Anchor href="#" onClick={onToggleNav}>
              Dashboard
            </Anchor>
          </Title>
          <Menu responsive={false} className={styles.navCloser}>
            <Button
              plain
              icon={<CloseIcon />}
              onClick={onToggleNav}
            />
          </Menu>
        </Header>
        <Menu primary>
          <Link to="geo-spatial" activeClassName="active">
            Geospatial View
          </Link>
          <Link to="key-metrics" activeClassName="active">
            Key Metrics
          </Link>
          <Link to="data" activeClassName="active">
            Data
          </Link>
        </Menu>
      </Sidebar>
    );
  }
  render() {
    const {
      navActive,
      children,
    } = this.props;
    return (
      <Split flex="right" priority="right">
        {navActive &&
          this.renderMenu()
        }
        <Section>
          {children}
        </Section>
      </Split>
    );
  }
}


SidebarNav.propTypes = {
  children: PropTypes.node.isRequired,
  navActive: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
};

export default cssModules(SidebarNav, styles);
