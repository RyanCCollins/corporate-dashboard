import AboutInfo from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<AboutInfo />', () => {
  it('renders with multiple headings', () => {
    const wrapper = shallow(<AboutInfo />);
    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find('h2')).toExist();
    expect(wrapper.find('h3')).toExist();
    expect(wrapper.find('h5')).toExist();
  });
  it('renders a card', () => {
    const wrapper = shallow(<AboutInfo />);
    expect(wrapper.find('.grommetux-card')).toExist();
  });
  it('renders an img', () => {
    const wrapper = shallow(<AboutInfo />);
    expect(wrapper.find('img')).toExist();
  });
  it('renders a button', () => {
    const wrapper = shallow(<AboutInfo />);
    expect(wrapper.find('button')).toExist();
  });
});
