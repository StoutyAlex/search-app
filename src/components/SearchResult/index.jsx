import React from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem';

const SearchResults = ({ results }) => (
  <ol className="c-search-results">
    {results.map((result, index) => (
      <SearchResultItem
        mainText={result.mainText}
        supportingText={result.supportingText}
        icon={result.icon}
        id={`searchResultItem-${index}`}
      />
    ))}
  </ol>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    mainText: PropTypes.string.isRequired,
    supportingText: PropTypes.string,
    icon: PropTypes.element,
  })),
};

SearchResults.defaultProps = {
  results: [],
};

export default SearchResults;
