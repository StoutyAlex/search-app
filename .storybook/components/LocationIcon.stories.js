import React from 'react';
import LocationIcon from '../../src/components/LocationIcon';

import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs, number, select } from "@storybook/addon-knobs";

import '../../src/styles/components/LocationIcon.scss';

const options = {
  'Airport': 'A',
  'City': 'C',
  'Station': 'T'
}

export default {
  title: 'LocationIcon',
  component: LocationIcon,
  decorators: [withKnobs, withPropsTable],
};

export const withoutContainer = () => {
  const type = select('type', options, 'A');

  return (
    <LocationIcon type={type} />
  );
}

export const withContainer = () => {
  const maxWidth = number('min-width', 60);
  const type = select('type', options, 'A');

  return (
    <div style={{ maxWidth }}>
      <LocationIcon type={type} />
    </div>
  );
};
