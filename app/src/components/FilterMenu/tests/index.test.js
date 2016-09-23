import FilterMenu from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Menu from 'grommet/components/Menu';
import Filter from 'grommet/components/icons/base/Filter';
import Anchor from 'grommet/components/Anchor';

describe('<FilterMenu />', () => {
  const wrapper = shallow(
    <FilterMenu
      menuItems={[]}
      onSelectItem={(e) => e}
      label="Wrapper"
      selectedItem={0}
    />
  );
  it('should render with expected elements', () => {
    expect(wrapper.find(<Menu />)).toExist();
    expect(wrapper.find(<Filter />)).toExist();
    expect(wrapper.find(<Anchor />)).toExist();
  });
});
