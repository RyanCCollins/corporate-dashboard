import OpenIssues from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import LinkUpIcon from 'grommet/components/icons/base/LinkUp';

describe('<OpenIssues />', () => {
  const wrapper = shallow(
    <OpenIssues
      stats={{
        total: 300,
        open: 122,
      }}
    />
  );
  it('should render with expected DOM', () => {
    expect(
      wrapper.find(<Box />)
    ).toExist();
    expect(
      wrapper.find(<Heading />)
    ).toExist();
    expect(
      wrapper.find(<Value />)
    ).toExist();
  });
  it('should render with expected Icons', () => {
    expect(
      wrapper.find(<GlobeIcon />)
    ).toExist();
    expect(
      wrapper.find(<LinkUpIcon />)
    ).toExist();
  });
});
