import AppHeader from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<AppHeader />', () => {
  const mockFn = (e) => e;
  const wrapper = shallow(<AppHeader onToggleNav={mockFn} />);
  it('should render with a header', () => {
    expect(wrapper.find('header')).toExist();
  });
  it('should render with a title', () => {
    expect(wrapper.find('.grommetux-title')).toExist();
  });
  it('should render with a dashboard title', () => {
    expect(wrapper.find('#dashboard-title')).toExist();
  });
});
