/**
* By Ryan Collins
* @Date:   2016-08-16T19:55:00-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:28-04:00
* @License: All rights reserved.
 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Menu from 'grommet/components/Menu';
import Filter from 'grommet/components/icons/base/Filter';
import Anchor from 'grommet/components/Anchor';
import DOMUtils from 'utils/DOM';

const itemsAreEqual = (item, value) =>
  item === value || item === value.split(' ')[0];

const parseLabel = (label) =>
  label.toLowerCase().split(' ').join('-');

class FilterMenu extends Component { // eslint-disable-line
  render() {
    const {
      menuItems,
      onSelectItem,
      label,
      selectedItem,
    } = this.props;
    return (
      <Menu
        icon={
          <Filter
            a11yTitle={label}
            a11yTitleId={`${parseLabel(label)}-${DOMUtils.generateUUID()}`}
          />
        }
        closeOnClick
        label={label}
        className={styles.filterMenu}
        a11yTitle={label}
        a11yTitleId={`${parseLabel(label)}-${DOMUtils.generateUUID()}`}
        pad="medium"
        dropAlign={{ left: 'left', top: 'bottom' }}
      >
        {menuItems && menuItems.map((item, i) =>
          <Anchor
            kef={i}
            ref="anchorRef"
            className={itemsAreEqual(selectedItem, item) ?
              styles.anchorSelected : styles.anchor}
            href="#"
            onClick={() => onSelectItem(item)}
          >
            {item}
          </Anchor>
        )}
      </Menu>
    );
  }
}

FilterMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selectedItem: PropTypes.string,
};

export default cssModules(FilterMenu, styles);
