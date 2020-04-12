import React from 'react';
import { action } from '@storybook/addon-actions';

import DropDownMenu from './DropDownMenu';
import '../../App/Root/Root.scss';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';
import Button from '../Button/Button';

export default {
  component: DropDownMenu,
  title: 'DropDownMenu',
};

export const Opened = () => (
  <TwoColumnGrid>
    <div>
      <Button onClick={action('clicked')} size='normal' fillWidth>
        Normal
      </Button>
      <DropDownMenu isOpen />
    </div>
  </TwoColumnGrid>
);

export const Closed = () => (
  <TwoColumnGrid>
    <div>
      <Button onClick={action('clicked')} size='normal' fillWidth>
        Normal
      </Button>
      <DropDownMenu isOpen={false} />
    </div>
  </TwoColumnGrid>
);
