import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './DropDownMenu.module.scss';

interface Props {
  /**
   * DropDownMenu open flag. Default: false
   */
  isOpen?: boolean;
}

/**
 * Simple DropDownMenu encapsulating all design variations
 */
const DropDownMenu: FC<Props> = ({ isOpen }) => {
  const contentClasses = classNames(
    styles.dropdownContent,
    { [styles.isOpen]: isOpen },
  );

  return (
    <div className={contentClasses}>
      <a href='#link1'>Link 1</a>
      <a href='#link2'>Link 2</a>
      <a href='#link3'>Link 3</a>
    </div>
  );
};

export default DropDownMenu;
