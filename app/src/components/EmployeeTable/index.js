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
    <Table
      selectable
      onSelect={(index) => onSelectItem(index)}
      selected={selectedIndex}
    >
      <thead>
        <th>
          Location
        </th>
        <th>
          Num Employees
        </th>
      </thead>
      <tbody>
        {employees.map((employee, i) =>
          <TableRow key={i}>
            <td>
              {employee.location}
            </td>
            <td>
              {employee.numemployees}
            </td>
          </TableRow>
        )}
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
