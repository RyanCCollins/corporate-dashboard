import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

const EmployeeTable = ({
  employees,
  onSelectItem,
  selectedIndex,
}) => (
  <Box
    pad={{ horizontal: 'large', vertical: 'medium' }}
    align="center"
    justify="center"
    className={styles.employeeTable}
  >
    <Table>
      <tbody>
        <TableRow>
          <tr>
            <th></th>
            {employees.map((employee, i) =>
              <th key={i}>
                {employee.location}
              </th>
            )}
          </tr>
          <tr>
            <th>
              Index
            </th>
            {employees.map((_, i) =>
              <td
                key={i}
                id={`employee-index-td-${i}`}
                onClick={() => onSelectItem(i)}
                className={selectedIndex === i ? 'grommetux-td--selected' : ''}
              >
                {i}
              </td>
            )}
          </tr>
          <tr>
            <th>
              Num Employees
            </th>
            {employees.map((employee, i) =>
              <td
                key={i}
                id={`employee-num-employees-td-${i}`}
                onClick={() => onSelectItem(i)}
                className={selectedIndex === i ? 'grommetux-td--selected' : ''}
              >
                {employee.numemployees}
              </td>
            )}
          </tr>
        </TableRow>
      </tbody>
    </Table>
  </Box>
);

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default cssModules(EmployeeTable, styles);
