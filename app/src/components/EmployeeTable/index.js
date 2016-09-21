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
  isMobile,
}) => (
  <Box
    pad={{ horizontal: 'large', vertical: 'medium' }}
    align="center"
    justify="center"
    className={styles.employeeTable}
  >
    {isMobile ?
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
    :
      <Table
        selectable
        onSelect={(index) => onSelectItem(index)}
        selected={selectedIndex}
      >
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
                Num Employees
              </th>
              {employees.map((employee, i) =>
                <td key={i}>
                  {employee.numemployees}
                </td>
              )}
            </tr>
          </TableRow>
        </tbody>
      </Table>
    }
  </Box>
);

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

EmployeeTable.defaultProps = {
  isMobile: false,
};

export default cssModules(EmployeeTable, styles);
