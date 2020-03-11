import React from 'react';
import { mount } from 'enzyme';

import SearchResults from '../../../../src/components/SearchResult';

describe('SearchResults', () => {
  it('renders', () => {
    const wrapper = mount(<SearchResults />);
    expect(wrapper.find('.c-search-results').length).toBe(1);
  });
});
