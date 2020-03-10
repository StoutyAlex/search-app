import React from 'react';
import { mount } from 'enzyme';

import SearchWidget from '../../../src/components/SearchWidget';
import InputField from '../../../src/components/InputField';

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
    };

    const wrapper = mount(<SearchWidget />);
    const input = wrapper.find(InputField);

    expect(input.props()).toEqual(expectedProps);
  });
});
