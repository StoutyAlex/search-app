import React from 'react';
import PropTypes from 'prop-types';


const SearchResultItem = ({ mainText, supportingText, icon }) => {
  const detailClassName = icon ? 'c-search-result-item__detail' : 'c-search-result-item__detail--no-icon';

  return (
    <li className="c-search-result-item">
      { icon && (
        <div className="c-search-result-item__icon">
          {icon}
        </div>
      )}
      <div className={detailClassName}>
        <div className="c-search-result-item__detail-main">
          {mainText}
        </div>
        { supportingText && (
          <div className="c-search-result-item__detail-supporting">
            {supportingText}
          </div>
        )}
      </div>
    </li>
  );
};

SearchResultItem.propTypes = {
  mainText: PropTypes.string.isRequired,
  supportingText: PropTypes.string,
  icon: PropTypes.element,
};

SearchResultItem.defaultProps = {
  supportingText: '',
  icon: null,
};

export default SearchResultItem;
