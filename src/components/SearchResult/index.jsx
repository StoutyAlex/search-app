import React from 'react';

import SearchResultItem from './SearchResultItem';
import LocationIcon from '../LocationIcon';

const SearchResults = () => (
  <ol className="c-search-results">
    <SearchResultItem mainText="Manchester" supportingText="Manchester, United Kingdom" icon={<LocationIcon type="A" />} />
    <SearchResultItem mainText="Manchester" supportingText="Manchester, United Kingdom" icon={<LocationIcon type="C" />} />
    <SearchResultItem mainText="Manchester" supportingText="Manchester, United Kingdom" icon={<LocationIcon type="T" />} />
  </ol>
);

export default SearchResults;
