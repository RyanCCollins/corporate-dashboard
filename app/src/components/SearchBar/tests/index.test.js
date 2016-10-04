import SearchBar from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';

describe('<SearchBar />', () => {
  it('should have the expected DOM', () => {
    const mockFn = (e) => e;
    const wrapper = shallow(
      <SearchBar
        onChangeValue={mockFn}
        searchValue="Hello World"
        isSearching
        onClear={mockFn}
      />
    );
    expect(wrapper.find(<Search />)).toExist();
    expect(wrapper.find(<Button />)).toExist();
    expect(wrapper.find(<CloseIcon />)).toExist();
  });
});
