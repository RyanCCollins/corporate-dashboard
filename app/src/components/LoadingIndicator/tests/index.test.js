import LoadingIndicator from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

describe('<LoadingIndicator />', () => {
  it('should render with an h2', () => {
    const component = shallow(<LoadingIndicator />);
    expect(
      component.find('h2')
    ).toExist();
  });
  it('should render with expected components', () => {
    const component = shallow(<LoadingIndicator isLoading />);
    expect(
      component.find(<Spinning />)
    ).toExist();
    expect(
      component.find(<Box />)
    ).toExist();
    expect(
      component.find(<Heading />)
    ).toExist();
  });
});
