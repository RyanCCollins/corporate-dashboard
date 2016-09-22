import AppHeader from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<AppHeader />', () => {
  it('should render with a header', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('header')).toExist();
  });
  it('should render with a title', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('.grommetux-title')).toExist();
  });
  it('should render with a dashboard title', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('#dashboard-title')).toExist();
  });
});
