import React from 'react';
import { action } from '@storybook/addon-actions';

import SelectBox from './SelectBox';
import '../../App/Root/Root.scss';

export default {
  component: SelectBox,
  title: 'SelectBox',
};

export const normal = () => (
  <SelectBox onChange={action('changed')} />
);

export const fullWidth = () => (
  <SelectBox fillWidth onChange={action('changed')} />
);

export const withPlaceholder = () => (
  <SelectBox placeholder='SelectBox...' onChange={action('changed')} />
);

export const multiple = () => (
  <SelectBox placeholder='SelectBox...' multiple />
);

export const error = () => (
  <SelectBox placeholder='SelectBox...' error onChange={action('changed')} />
);

export const disabled = () => (
  <SelectBox
    placeholder='SelectBox...'
    disabled
    onChange={action('changed')}
  />
);
