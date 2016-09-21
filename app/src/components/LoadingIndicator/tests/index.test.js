import LoadingIndicator from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LoadingIndicator />', () => {
  it('should render with an h2', () => {
    const component = shallow(<LoadingIndicator />);
    expect(
      component.find('h2')
    ).toExist();
  });
});
