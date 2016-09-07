import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import { Link } from 'react-router';

const SidebarNav = ({
  children,
}) => (
  <Split flex="right">
    <Sidebar size="small" colorIndex="neutral-1">
      <Header pad={{ horizontal: 'medium' }}>
        <Link to="/">
          Dashboard
        </Link>
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


SidebarNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(SidebarNav, styles);
