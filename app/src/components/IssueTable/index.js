import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Table from 'grommet/components/Table';
import { parseIssue } from 'utils/parsing';
import Status from 'grommet/components/icons/Status';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Spinning from 'grommet/components/icons/Spinning';

const IssueTable = ({
  issues,
  headers,
  isMobile,
  isLoadingMore,
  onRequestMore,
}) => (
  <Section>
    {isMobile ?
      <Tiles fill>
        <Box justify="center" align="center" pad="small" size="large">
          {issues.map((issue, i) =>
            <Tile
              key={i}
              align="start"
              direction="row" pad={{ horizontal: 'medium', vertical: 'small' }}
            >
              <Box a11yTitle={`Open ${parseIssue(issue).customer}`} align="center" direction="row">
                <Status value={parseIssue(issue).status} />
                <Box key="contents" direction="column" pad="none" tag="div">
                  <h4>{parseIssue(issue).customer}</h4>
                  <span>{parseIssue(issue).employee}</span>
                  <span>{parseIssue(issue).submitted}</span>
                  <p>{parseIssue(issue).description}</p>
                </Box>
              </Box>
            </Tile>
          )}
        </Box>
      </Tiles>
    :
      <Table>
        <thead>
          <tr>
            {headers.map((item, i) =>
              <th key={i}>{item}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {issues.map(i => parseIssue(i)).map((issue, i) =>
            <tr key={i}>
              <td>{issue.submitted}</td>
              <td>{issue.closed}</td>
              <td>
                <Status
                  value={issue.status}
                  size="medium"
                  a11yTitle={`Issue ${issue.customer} -- Status ${issue.status}`}
                />
              </td>
              <td>{issue.employee}</td>
              <td>{issue.customer}</td>
              <td>{issue.description}</td>
            </tr>
          )}
        </tbody>
      </Table>
    }
    {isLoadingMore &&
      <Spinning />
    }
  </Section>
);

IssueTable.propTypes = {
  issues: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
  onRequestMore: PropTypes.func.isRequired,
};

IssueTable.defaultProps = {
  isLoadingMore: false,
};

export default cssModules(IssueTable, styles);
