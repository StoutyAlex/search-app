import React from 'react';
import { mount } from 'enzyme';

import SearchWidget from '../../../src/components/SearchWidget';
import InputField from '../../../src/components/InputField';
import SearchResults from '../../../src/components/SearchResult';

describe('SearchWidget', () => {
  it('should render h2 with title', () => {
    const wrapper = mount(<SearchWidget />);
    const title = wrapper.find('.c-search-widget__title');

    expect(title.text()).toBe('Where are you going?');
  });

  it('should render InputField with correct props', () => {
    const expectedProps = {
      placeholder: 'city, airport, station, region and district...',
      label: 'Pick-Up Location',
      onChange: expect.any(Function),
      onBlur: expect.any(Function),
      onFocus: expect.any(Function),
    };

    const wrapper = mount(<SearchWidget />);
    const input = wrapper.find(InputField);

    expect(input.props()).toEqual(expectedProps);
  });

  describe('SearchResults', () => {
    it('does not render SearchResults initially', () => {
      const wrapper = mount(<SearchWidget />);
      expect(wrapper.find(SearchResults).exists()).toBe(false);
    });

    it('does not render SearchResults when input is less than 2 characters onFocus', () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');
      input.simulate('focus');

      expect(wrapper.find(SearchResults).exists()).toBe(false);
    });

    it('renders SearchResults when input is more than 1 character onFocus', () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'Hello' } });
      input.simulate('focus');

      expect(wrapper.find(SearchResults).exists()).toBe(true);
    });

    it('hides search results when text goes back to < 1', () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'Hello' } });
      expect(wrapper.find(SearchResults).exists()).toBe(true);
      input.simulate('change', { target: { value: 'a' } });
      expect(wrapper.find(SearchResults).exists()).toBe(false);
    });

    it('does not render SearchResults when input is onBlur', () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');
      input.simulate('blur');

      expect(wrapper.find(SearchResults).exists()).toBe(false);
    });
  });
});
