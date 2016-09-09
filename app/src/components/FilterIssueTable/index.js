import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { FilterMenu } from 'components';
import Section from 'grommet/components/Section';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/button';
import Close from 'grommet/components/icons/base/Close';
import Footer from 'grommet/components/Footer';
import shouldBeEnabled from 'utils/filter';

const FilterIssueTable = ({
  employees,
  customers,
  onFilter,
  filter,
  onApplyFilters,
  onClearFilter,
  isFiltering,
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
          onSelectItem={onFilter.bind('employee')}
          label="Employee"
        />
        <FilterMenu
          menuItems={customers}
          onSelectItem={onFilter.bind('customer')}
          label="Customer"
        />
      </Menu>
      <Footer className={styles.footerContainer}>
        {isFiltering ?
          <Button
            classname={styles.clearButton}
            icon={<Close a11yTitle="" />}
            label="Clear Filters"
            plain
            onClick={onClearFilter}
          />
        :
          <Button
            label="Apply Filters"
            primary
            onClick={
              shouldBeEnabled(filter) ?
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
  isFiltering: PropTypes.bool.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};

export default cssModules(FilterIssueTable, styles);
