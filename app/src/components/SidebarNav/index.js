import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import { Link } from 'react-router';

class SidebarNav extends Component {
  constructor() {
    super();
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleSetResponsive = this.handleSetResponsive.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.state = {
      showMenu: true,
      responsive: 'multiple',
    };
  }
  handleMenuOpen() {
    this.setState({
      showMenu: true,
    });
  }
  handleCloseMenu() {
    this.setState({
      showMenu: false,
    });
  }
  handleSetResponsive(responsive) {
    this.setState({
      responsive,
    });
    if (responsive === 'multiple') {
      this.setState({
        showMenu: true,
      });
    }
    if (responsive === 'single') {
      this.setState({
        showMenu: false,
      });
    }
  }
  render() {
    const {
      responsive,
      showMenu,
    } = this.state;
    const {
      children,
    } = this.props;
    const priority = responsive === 'single' && showMenu ?
      'left' : 'right';
    return (
      <Split flex="right" priority={priority} onResponsive={this.handleSetResponsive}>
        {responsive === 'single' &&
          <Header justify="between" size="large" pad={{ horizontal: 'large' }}>
            <Menu direction="row" responsive={false}>
              <a href="#" onClick={this.handleMenuOpen}>Menu</a>
            </Menu>
          </Header>
        }
        <Sidebar size="small" colorIndex="neutral-1">
          <Header justify="between" pad={{ horizontal: 'medium' }}>
            <Link to="/">
              Dashboard
            </Link>
            <Button
              style={responsive === 'single' && { display: 'none' }}
              icon={<CloseIcon />}
              onClick={this.handleCloseMenu}
            />
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
        <Section>
          {children}
        </Section>
      </Split>
    );
  }
}


SidebarNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(SidebarNav, styles);
