import Slider from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';

describe('<Slider />', () => {
  it('should have the expected components', () => {
    const wrapper = shallow(
      <Slider
        onSlide={e => e}
        value={1000}
        min={1000}
        max={10000}
        defaultValue={1000}
      />
    );
    expect(
      wrapper.find(<Form />)
    ).toExist();
    expect(
      wrapper.find(<FormField />)
    ).toExist();
    expect(
      wrapper.find('input')
    ).toExist();
    expect(
      wrapper.find('#slider-1')
    ).toExist();
  });
});
