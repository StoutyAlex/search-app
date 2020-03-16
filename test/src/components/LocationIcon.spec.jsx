import React from 'react';
import { mount } from 'enzyme';

import LocationIcon from '../../../src/components/LocationIcon';

describe('LocationIcon', () => {
  it('renders Aiport when type is A', () => {
    const wrapper = mount(<LocationIcon type="A" />);
    expect(wrapper.find('.c-location-icon--airport').length).toBe(1);
    expect(wrapper.text()).toBe('Airport');
  });

  it('renders City when type is C', () => {
    const wrapper = mount(<LocationIcon type="C" />);
    expect(wrapper.find('.c-location-icon--city').length).toBe(1);
    expect(wrapper.text()).toBe('City');
  });

  it('renders Station when type is T', () => {
    const wrapper = mount(<LocationIcon type="T" />);
    expect(wrapper.find('.c-location-icon--station').length).toBe(1);
    expect(wrapper.text()).toBe('Station');
  });

  it('returns null when type does not exist', () => {
    const wrapper = mount(<LocationIcon type="NONE-EXISTANT" />);
    expect(wrapper.find('.c-location-icon__pill').exists()).toBe(false);
  });
});
