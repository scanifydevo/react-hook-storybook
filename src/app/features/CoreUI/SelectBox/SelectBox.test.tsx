import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import SelectBox from './SelectBox';

const placeholder = 'input';

describe('SelectBox', () => {
  afterEach(cleanup);

  it('handles change event', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SelectBox placeholder={placeholder} onChange={handleChange} />,
    );
    const element = getByPlaceholderText(placeholder);
    fireEvent.input(element, { target: { value: 'option1' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays placeholder', () => {
    const { getByPlaceholderText } = render(
      <SelectBox placeholder={placeholder} />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element).toBeInTheDocument();
  });

  it('can be disabled', () => {
    const { getByPlaceholderText } = render(
      <SelectBox placeholder={placeholder} disabled />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest('input')).toHaveAttribute('disabled', '');
  });
});
