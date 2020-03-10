import React from 'react';
import { mount } from 'enzyme';

import App from '../src/App';

describe('Hello World', () => {
  let wrapper;

  it('should render basic app component', () => {
    wrapper = mount(<App />);

    expect(wrapper.text()).toBe('Hello World');
  });
});
