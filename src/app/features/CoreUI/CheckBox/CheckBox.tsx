import React, { FC, forwardRef, Ref, useCallback, useState } from 'react';
import classNames from 'classnames';

import Label from '../Label/Label';
import styles from './CheckBox.module.scss';
import CheckboxIcon from '../Icons/CheckboxIcon';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to be displayed alongside with toggle input
   */
  label?: string;

  /**
   * Default value of toggle input, does not make the input controlled
   */
  defaultValue?: boolean;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Register callback for change event
   */
  onChange?: (newChecked: boolean) => void;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const CheckBox: FC<Props> = forwardRef((props, ref) => {
  const { label, defaultValue, disabled, onChange, ...otherProps } = props;

  const [isChecked, setChecked] = useState(!!defaultValue);

  const toggle = useCallback(
    () => {
      const newValue = !isChecked;
      setChecked(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [isChecked, onChange],
  );

  return (
    <Label title={label || ''} disabled={disabled} position='right'>
      <input
        type='checkbox'
        className={classNames(styles.checkButton)}
        ref={ref}
        checked={isChecked}
        disabled={disabled}
        onChange={toggle}
        {...otherProps}
      />
      <CheckboxIcon isActive={isChecked} disabled={disabled} />
    </Label>
  );
});

export default CheckBox;
