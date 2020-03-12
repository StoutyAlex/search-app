import React from 'react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import InputField from '../../src/components/InputField';

import '../../src/styles/components/InputField.scss';

export default {
  title: 'InputField',
  component: InputField,
  decorators: [withKnobs, withPropsTable],
};

const onChangeAction = action('onChange');

export const withLabel = () => {
  const label = text('Label', 'Label');
  const placeholder = text('Placeholder', 'placeholder');

  return <InputField label={label} placeholder={placeholder} onChange={onChangeAction}/>;
}

export const withoutLabel = () => {
  const placeholder = text('Placeholder', 'placeholder');

  return <InputField placeholder={placeholder} onChange={onChangeAction} />;
}

export const basic = () => {
  return <InputField onChange={onChangeAction} />;
}


