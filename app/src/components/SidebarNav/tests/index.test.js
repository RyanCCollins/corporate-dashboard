import SidebarNav from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';

describe('<SidebarNav />', () => {
  describe('Nav active is false', () => {
    const wrapper = shallow(
      <SidebarNav onToggleNav={(e) => e} navActive={false}>
        <div id="children">
          Hello World
        </div>
      </SidebarNav>
    );
    it('should have expected components when in default state.', () => {
      expect(
        wrapper.find(<Split />)
      ).toExist();
    });
    it('should render with children', () => {
      expect(
        wrapper.find('#children')
      ).toExist();
    });
  });
  describe('Nav active is true', () => {
    const wrapper = shallow(
      <SidebarNav onToggleNav={(e) => e} navActive>
        <div>
          Hello World
        </div>
      </SidebarNav>
    );
    it('should render with sidebar component', () => {
      expect(
        wrapper.find(<Sidebar />)
      ).toExist();
    });
    it('should render with menu component', () => {
      expect(
        wrapper.find(<Menu />)
      ).toExist();
    });
  });
});
