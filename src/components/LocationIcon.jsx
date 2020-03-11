import React from 'react';
import PropTypes from 'prop-types';

const typeMap = {
  D: 'District',
  I: 'Region',
  F: 'Region',
  G: 'Place',
  A: 'Airport',
  C: 'City',
  T: 'Station',
};

const LocationIcon = ({ type }) => {
  const name = typeMap[type] || 'default';
  const classNames = `c-location-icon--${name.toLowerCase()} c-location-icon__pill`;

  return (
    <div className={classNames}>
      {name}
    </div>
  );
};

LocationIcon.propTypes = {
  type: PropTypes.oneOf(Object.keys(typeMap)).isRequired,
};

export default LocationIcon;
