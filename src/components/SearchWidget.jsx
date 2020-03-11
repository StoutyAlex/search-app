import React from 'react';

import InputField from './InputField';
import SearchResults from './SearchResult';

const SearchWidget = (props) => (
  <div className="c-search-widget">
    <h2 className="c-search-widget__title">
      Where are you going?
    </h2>
    <InputField
      placeholder="city, airport, station, region and district..."
      label="Pick-Up Location"
    />
    <SearchResults />
  </div>
);

export default SearchWidget;
