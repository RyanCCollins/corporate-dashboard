import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Table from 'grommet/components/Table';
import { parseIssue } from 'utils/parsing';
import Status from 'grommet/components/icons/Status';

const IssueTable = ({
  issues,
  headers,
}) => (
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
);

IssueTable.propTypes = {
  issues: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};

export default cssModules(IssueTable, styles);
