import React from 'react';
import { action } from '@storybook/addon-actions';

import CheckBox from './CheckBox';

export default {
  component: CheckBox,
  title: 'CheckBox',
};

export const normal = () => (
  <CheckBox onChange={action('changed')} />
);

export const checked = () => (
  <CheckBox defaultValue onChange={action('changed')} />
);

export const withLabel = () => (
  <CheckBox label='CheckBox' onChange={action('changed')} />
);

export const disabledNormal = () => (
  <CheckBox disabled />
);

export const disabledChecked = () => (
  <CheckBox defaultValue disabled />
);

export const disabledWithLabel = () => (
  <CheckBox label='Status' defaultValue disabled />
);
