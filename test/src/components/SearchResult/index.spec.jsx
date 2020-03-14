import React from 'react';
import { mount } from 'enzyme';

import SearchResults from '../../../../src/components/SearchResult';
import SearchResultItem from '../../../../src/components/SearchResult/SearchResultItem';

const mockResults = [
  {
    mainText: 'MainText1',
    supportingText: 'supportingText1',
    icon: <div />,
  },
  {
    mainText: 'MainText2',
    supportingText: 'supportingText2',
    icon: <div />,
  },
  {
    mainText: 'MainText3',
    supportingText: 'supportingText3',
    icon: <div />,
  },
  {
    mainText: 'MainText4',
    supportingText: 'supportingText4',
    icon: <div />,
  },
];

describe('SearchResults', () => {
  it('renders no SearchResultItems when results is empty array', () => {
    const wrapper = mount(<SearchResults results={[]} />);
    expect(wrapper.find(SearchResultItem).length).toBe(0);
  });

  it('renders correct amount of SearchResultItems when results is valid', () => {
    const wrapper = mount(<SearchResults results={mockResults} />);
    expect(wrapper.find(SearchResultItem).length).toBe(mockResults.length);
  });

  it('sets key on each SearchResultItem given', () => {
    const expectedKey = 'searchResultItem-0';

    const wrapper = mount(<SearchResults results={mockResults} />);
    const searchResult1 = wrapper.find(SearchResultItem).first();

    expect(searchResult1.props().id).toBe(expectedKey);
  });
});
