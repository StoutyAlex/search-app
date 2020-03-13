import React, { useState } from 'react';

import InputField from './InputField';
import SearchResults from './SearchResult';

const SearchWidget = () => {
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length > 1) {
      setQuery(value);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleOnFocus = () => {
    if (query.length > 1) setShowResults(true);
  };

  return (
    <div className="c-search-widget">
      <h2 className="c-search-widget__title">
        Where are you going?
      </h2>
      <InputField
        placeholder="city, airport, station, region and district..."
        label="Pick-Up Location"
        onChange={handleChange}
        onBlur={() => setShowResults(false)}
        onFocus={handleOnFocus}
      />
      {showResults && <SearchResults />}
    </div>
  );
};

export default SearchWidget;
