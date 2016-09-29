import SidebarNav from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';

describe('<SidebarNav />', () => {
  const wrapper = shallow(
    <SidebarNav onToggleNav={(e) => e} navActive={false}>
      <div>
        Hello World
      </div>
    </SidebarNav>
  );
  it('should have expected components when in default state.', () => {
    expect(
      wrapper.find(<Split />)
    ).toExist();
  });
  it('should render as expected when active', () => {
    expect(
      wrapper.find(<Sidebar />)
    ).toExist();
    expect(
      wrapper.find(<Menu />)
    ).toExist();
  });
});
