import React from 'react';
import SearchResultItem from '../../src/components/SearchResult/SearchResultItem';
import LocationIcon from '../../src/components/LocationIcon';

import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs, number, text } from "@storybook/addon-knobs";

import '../../src/styles/components/SearchResultItem.scss';

export default {
  title: 'SearchResultItem',
  component: SearchResultItem,
  decorators: [withKnobs, withPropsTable],
};

export const basic = () => {
  const mainText = text('mainText', 'Manchester');
  const supportingText = text('supportingText', 'United Kingdom, England');

  return (
    <SearchResultItem mainText={mainText} supportingText={supportingText} />
  );
}

export const withoutSupportingText = () => {
  const mainText = text('mainText', 'Manchester');
  const maxWidth = number('min-width', 600);

  return (
    <div style={{ maxWidth }}>
      <SearchResultItem mainText={mainText} />
    </div>
  );
}

export const withIcon = () => {
  const mainText = text('mainText', 'Manchester');
  const supportingText = text('supportingText', 'United Kingdom, England');
  const maxWidth = number('min-width', 600);

  const icon = <LocationIcon type="A" />;

  return (
    <div style={{ maxWidth }}>
      <SearchResultItem mainText={mainText} supportingText={supportingText} icon={icon} />
    </div>
  );
}
