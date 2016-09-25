import SidebarNav from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';

describe('<SidebarNav />', () => {
  it('should have expected components when in default state.', () => {
    const wrapper = shallow(
      <SidebarNav navActive={false}>
        <div>
          Hello World
        </div>
      </SidebarNav>
    );
    expect(
      wrapper.find(<Split />)
    ).toExist();
  });
  it('should render as expected when active', () => {
    const wrapper = shallow(
      <SidebarNav navActive={false}>
        <div>
          Hello World
        </div>
      </SidebarNav>
    );
    expect(
      wrapper.find(<Sidebar />)
    ).toExist();
    expect(
      wrapper.find(<Menu />)
    ).toExist();
  });
});
