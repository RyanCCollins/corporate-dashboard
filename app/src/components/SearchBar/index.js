import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Search from 'grommet/components/Search';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';

const SearchBar = ({
  onChangeValue,
  searchValue,
  isSearching,
  onClear,
}) => (
  <div className={styles.searchBar}>
    <Search
      dropAlign={{ left: 'left' }}
      value={searchValue}
      onDOMChange={onChangeValue}
      onBlur={(e) => onClear(e)}
    />
    {isSearching &&
      <Button
        className={styles.closer}
        onClick={onClear}
        icon={<CloseIcon />}
      />
    }
  </div>
);

SearchBar.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  isSearching: PropTypes.bool.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default cssModules(SearchBar, styles);
