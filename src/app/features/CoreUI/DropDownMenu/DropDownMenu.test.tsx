import React from 'react';
import { render, cleanup } from '@testing-library/react';

import DropDownMenu from './DropDownMenu';

const testLabel = 'Hello World';

describe('DropDownMenu', () => {
  afterEach(cleanup);

  it('renders in the document', () => {
    const { getByText } = render(<DropDownMenu isOpen>{testLabel}</DropDownMenu>);
    const element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });
});
