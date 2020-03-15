import React from 'react';
import SearchResults from '../../src/components/SearchResult';
import LocationIcon from '../../src/components/LocationIcon';

import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs, object } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';

import '../../src/styles/components/SearchResults.scss';

export default {
  title: 'SearchResults',
  component: SearchResults,
  decorators: [withKnobs, withPropsTable, jsxDecorator, withA11y],
};

export const basic = () => {
  const item1 = object('result 1', {
    mainText: 'Manchester',
    supportingText: 'United Kingdom',
    icon: <LocationIcon type="A" />
  });
  
  const item2 = object('result 2', {
    mainText: 'Liverpool',
    supportingText: 'United Kingdom',
    icon: <LocationIcon type="G" />
  });
  
  const item3 = object('result 3', {
    mainText: 'Salford',
    supportingText: 'United Kingdom',
    icon: <LocationIcon type="D" />
  });

  const results = [item1, item2, item3];

  return (
    <SearchResults results={results} />
  );
};

export const itemWithNoIcon = () => {
  const itemNoIcon1 = object('no icon 1', {
    mainText: 'Salford',
    supportingText: 'United Kingdom',
  });

  const itemNoIcon2 = object('no icon 3', {
    mainText: 'Manchester',
    supportingText: 'United Kingdom',
  });

  const results = [itemNoIcon1, itemNoIcon2];

  return (
    <SearchResults results={results} />
  );
};

export const itemWithNoSupportingText = () => {
  const itemNoSupporting1 = object('no supporting 1', {
    mainText: 'Salford',
  });

  const itemNoSupporting2 = object('no supporting 3', {
    mainText: 'Manchester',
  });

  const results = [itemNoSupporting1, itemNoSupporting2];

  return (
    <SearchResults results={results} />
  );
};

export const mixOfItemTypes = () => {
  const result1 = object('result 1', {
    mainText: 'Manchester',
    supportingText: 'United Kingdom',
    icon: <LocationIcon type="A" />
  });

  const itemNoSupporting = object('no supporting', {
    mainText: 'Salford',
  });

  const itemNoIcon = object('no icon', {
    mainText: 'Manchester',
    supportingText: 'United Kingdom'
  });

  const results = [result1, itemNoIcon, itemNoSupporting];

  return (
    <SearchResults results={results} />
  );
};