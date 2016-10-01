import IssueTable from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Status from 'grommet/components/icons/Status';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
const issues = [{"id":"57e8010a03ba9b7150a8cda7","submission":"2016-11-18T12:33:26 +05:00","closed":"","status":"warning","isActive":true,"customer":{"name":"Mayra Mcfarland","company":"Golistic"},"employee":{"name":"Monique Chaney","company":"Ebidco"},"description":"Dolor elit tempor ullamco qui mollit pariatur qui laboris nisi. Ex dolor id laborum incididunt elit officia adipisicing ea Lorem eiusmod. Pariatur veniam dolor dolore nisi. Minim sint nostrud excepteur duis esse officia irure in fugiat. Nisi Lorem fugiat incididunt cupidatat incididunt. Enim dolor quis veniam velit ad consectetur ea ullamco nisi incididunt aliqua veniam enim sunt.\r\n"}]
const headers = ['Submitted'];



describe('<IssueTable />', () => {
  it('should render with expected components', () => {
    const wrapper = shallow(
      <IssueTable
        issues={issues}
        headers={headers}
        isLoadingMore
        isMobile
      />
    );
    expect(
      wrapper.find(<Status />)
    ).toExist();
    expect(
      wrapper.find(<Tiles />)
    ).toExist();
    expect(
      wrapper.find(<Tile />)
    ).toExist();
    expect(
      wrapper.find(<Box />)
    ).toExist();
    expect(
      wrapper.find(<Section />)
    ).toExist();
    expect(
      wrapper.find(<Heading />)
    ).toExist();
    expect(
      wrapper.find(<Paragraph />)
    ).toExist();
  });
});
