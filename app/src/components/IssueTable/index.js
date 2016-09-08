import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Table from 'grommet/components/Table';
import { parseIssue } from 'utils/parsing';

const IssueTable = ({
  issues,
  headers,
}) => (
  <Table>
    <thead>
      <tr>
        {headers.map(item =>
          <th>
            {item}
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      {issues.map(i => parseIssue(i)).map(item =>
        <tr>
          <td>
            {item.submitted}
          </td>
          <td>
            {item.closed}
          </td>
          <td>
            {item.employee}
          </td>
          <td>
            {item.customer}
          </td>
          <td>
            {item.description}
          </td>
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
