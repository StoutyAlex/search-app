import React from 'react';
import PropTypes from 'prop-types';

import getPlaceType from '../lib/getPlaceType';

const LocationIcon = ({ type }) => {
  const name = getPlaceType(type);
  if (!name) return null;
  const classNames = `c-location-icon--${name.toLowerCase()} c-location-icon__pill`;

  return (
    <div className={classNames}>
      {name}
    </div>
  );
};

LocationIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default LocationIcon;
