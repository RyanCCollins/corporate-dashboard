import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { FilterMenu } from 'components';
import Section from 'grommet/components/Section';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Close from 'grommet/components/icons/base/Close';
import Footer from 'grommet/components/Footer';
import { canApply } from './utils';

const FilterIssueTable = ({
  employees,
  customers,
  onFilter,
  filter,
  onApplyFilters,
  onClearFilter,
}) => (
  <Section
    className={styles.filterIssueTable}
  >
    <div className={styles.menuWrapper}>
      <Menu
        direction="row"
        size="small"
        responsive
        closeOnClick={false}
      >
        <FilterMenu
          menuItems={employees}
          selectedItem={filter.employee}
          onSelectItem={(value) => onFilter('employee', value)}
          label="Employee"
        />
        <FilterMenu
          menuItems={customers}
          selectedItem={filter.customer}
          onSelectItem={(value) => onFilter('customer', value)}
          label="Customer"
        />
      </Menu>
      <Footer className={styles.footerContainer}>
        {filter.isFiltering ?
          <Button
            classname={styles.button}
            icon={<Close a11yTitle="" />}
            label="Clear Filters"
            plain
            onClick={onClearFilter}
          />
        :
          <Button
            label="Apply Filters"
            classname={styles.button}
            primary
            onClick={
              canApply(filter) ?
                onApplyFilters : null
              }
          />
        }
      </Footer>
    </div>
  </Section>
);

FilterIssueTable.propTypes = {
  employees: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};

export default cssModules(FilterIssueTable, styles);
