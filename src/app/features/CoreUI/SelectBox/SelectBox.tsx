import React, { FC, forwardRef, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';

import styles from './SelectBox.module.scss';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Placeholder to show when empty
   */
  placeholder?: string;

  /**
   * Register callback for change event
   */
  onChange?: (newChecked: Array<string>) => void;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Stretch to max width. Default: false
   */
  fillWidth?: boolean;

  /**
   * Display error state
   */
  error?: boolean;

  /**
   * select className
   */
  className?: string;

  /**
   * Current value of select
   */
  value?: string;

  /**
   * Current value of select
   */
  multiple?: boolean;
}

const SelectBox: FC<Props> = forwardRef((props) => {
  const { fillWidth, className, error, placeholder, multiple, onChange, ...otherProps } = props;
  const selectReference = useRef(null);
  const [values, setValues] = useState<string[]>([]);
  const onSelect = useCallback(
    (event) => {
      const newValue = [...event.target.selectedOptions].map((item) => item.value);
      setValues(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [values, onChange],
  );
  const renderPlaceholder = () => {
    if (placeholder) {
      if (multiple) {
        const selectedValues = values.join(',');
        return (
          selectedValues
            ? <option value='' selected disabled>{selectedValues}</option>
            : <option value='' selected disabled>{placeholder}</option>
        );
      }
      return <option value='' selected disabled>{placeholder}</option>;
    }
    return null;
  };

  return (
    <select
      ref={selectReference}
      multiple={multiple}
      className={
        classNames(
          styles.select,
          className,
          {
            [styles.fillWidth]: fillWidth,
            [styles.error]: error,
            [styles.multiple]: multiple,
            [styles.selectCheckbox]: multiple,
          },
        )
      }
      onChange={onSelect}
      {...otherProps}
    >
      {renderPlaceholder()}
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
      <option value='option4'>Option 4</option>
    </select>
  );
});

export default SelectBox;
