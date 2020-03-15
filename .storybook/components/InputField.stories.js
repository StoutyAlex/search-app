import React from 'react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';


import InputField from '../../src/components/InputField';

import '../../src/styles/components/InputField.scss';

export default {
  title: 'InputField',
  component: InputField,
  decorators: [withKnobs, withPropsTable, jsxDecorator, withA11y],
};

const onChangeAction = action('onChange');
const onFocusOption = action('onFocus');
const onBlurOption = action('onBlur');

const actionProps = {
  onChange: onChangeAction,
  onFocus: onFocusOption,
  onBlur: onBlurOption,
}


export const withLabel = () => {
  const label = text('Label', 'Label');
  const placeholder = text('Placeholder', 'placeholder');

  return <InputField label={label} placeholder={placeholder} {...actionProps} />;
}

export const withoutLabel = () => {
  const placeholder = text('Placeholder', 'placeholder');

  return <InputField placeholder={placeholder} {...actionProps} />;
}

export const basic = () => {
  return <InputField {...actionProps} />;
}


