import React from 'react';
import { mount } from 'enzyme';

import SearchResultItem from '../../../../src/components/SearchResult/SearchResultItem';

describe('SearchResultItem', () => {
  it('renders', () => {
    const wrapper = mount(<SearchResultItem mainText="main" icon={<div />} />);

    expect(wrapper.find('.c-search-result-item').length).toBe(1);
    expect(wrapper.find('.c-search-result-item__detail').length).toBe(1);
    expect(wrapper.find('.c-search-result-item__icon').length).toBe(1);
  });

  it('should contain detail with main and supporting text', () => {
    const mainText = 'Manchester';
    const supportingText = 'Its the place to be';

    const wrapper = mount(<SearchResultItem mainText={mainText} supportingText={supportingText} />);

    const main = wrapper.find('.c-search-result-item__detail-main');
    const supporting = wrapper.find('.c-search-result-item__detail-supporting');

    expect(main.text()).toBe(mainText);
    expect(supporting.text()).toBe(supportingText);
  });

  it('should not render supporting text if not provided', () => {
    const mainText = 'Manchester';

    const wrapper = mount(<SearchResultItem mainText={mainText} />);

    const supporting = wrapper.find('.c-search-result-item__detail-supporting');

    expect(supporting.length).toBe(0);
  });

  describe('Icon', () => {
    it('should render icon when icon is provided', () => {
      const icon = <div>Icon</div>;

      const wrapper = mount(<SearchResultItem mainText="main" icon={icon} />);
      const iconWrapper = wrapper.find('.c-search-result-item__icon');

      expect(iconWrapper.length).toBe(1);
    });

    it('should NOT render icon when icon is NOT provided', () => {
      const wrapper = mount(<SearchResultItem mainText="main" />);
      const iconWrapper = wrapper.find('.c-search-result-item__icon');

      expect(iconWrapper.length).toBe(0);
    });
  });
});
