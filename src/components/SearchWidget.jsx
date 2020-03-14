import React, { useState, useEffect } from 'react';

import InputField from './InputField';
import SearchResults from './SearchResult';

import fetchLocations from '../lib/fetchLocations';
import useDebounce from '../lib/useDebounce';

const SearchWidget = () => {
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setSearchResults] = useState([]);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (query.length > 1) {
      fetchLocations(debouncedQuery).then(setSearchResults);
    } else {
      setSearchResults(null);
      setShowResults(false);
    }
  }, [debouncedQuery]);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
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
        onFocus={() => setShowResults(true)}
      />
      {(showResults && results) && <SearchResults />}
    </div>
  );
};

export default SearchWidget;
