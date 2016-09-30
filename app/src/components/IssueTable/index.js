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
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

const IssueTable = ({
  issues,
  headers,
  isMobile,
  onRequestMore,
}) => (
  <Section>
    {issues && issues.length > 0 ?
      <div>
        {isMobile ?
          <Table onMore={onRequestMore}>
            <Tiles>
              <Box justify="center" align="start" pad="small">
                <tbody>
                  {issues.map((issue, i) =>
                    <Tile
                      key={i}
                      align="start"
                      direction="row" pad={{ horizontal: 'small', vertical: 'small' }}
                    >
                      <Box
                        a11yTitle={`Open ${parseIssue(issue).customer}`}
                        align="center"
                        direction="row"
                      >
                        <Status value={parseIssue(issue).status} />
                        <Box
                          key="contents"
                          direction="column"
                          pad={{ horizontal: 'small' }}
                          tag="div"
                        >
                          <h4>{parseIssue(issue).customer}</h4>
                          <span>{parseIssue(issue).employee}</span>
                          <span>{parseIssue(issue).submitted}</span>
                          <Paragraph
                            className={styles.issueTableParagraph}
                          >
                            {parseIssue(issue).description}
                          </Paragraph>
                        </Box>
                      </Box>
                    </Tile>
                  )}
                </tbody>
              </Box>
            </Tiles>
          </Table>
        :
          <Table onMore={onRequestMore}>
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
      </div>
    :
      <Heading align="center">
        No Issues
      </Heading>
    }
  </Section>
);

IssueTable.propTypes = {
  issues: PropTypes.array,
  headers: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  onRequestMore: PropTypes.func.isRequired,
};

IssueTable.defaultProps = {
  isLoadingMore: false,
};

export default cssModules(IssueTable, styles);
