import React from 'react';
import { mount } from 'enzyme';

import InputField from '../../src/components/InputField';

describe('InputField', () => {
  it('renders input field', () => {
    const wrapper = mount(<InputField />);
    expect(wrapper.find('.c-input-field').exists()).toBe(true);
  });

  it('renders input with given placeholder', () => {
    const placeholder = 'test-placeholder';

    const wrapper = mount(<InputField placeholder={placeholder} />);

    expect(wrapper.find('input').instance().placeholder).toEqual(placeholder);
  });

  it('renders input with no placeholder if not provided', () => {
    const wrapper = mount(<InputField />);

    expect(wrapper.find('input').instance().placeholder).toEqual('');
  });

  it('renders input with type as text', () => {
    const wrapper = mount(<InputField />);

    expect(wrapper.find('input').instance().type).toEqual('text');
  });

  it('updates input value when input is changed', () => {
    const value = 'new value';

    const input = mount(<InputField />).find('input');
    input.simulate('change', { target: { value } });

    expect(input.instance().value).toBe(value);
  });

  it('calls prop onChange when input is changed', () => {
    const mockOnChange = jest.fn();

    const input = mount(<InputField onChange={mockOnChange} />).find('input');
    input.simulate('change', { target: { value: 'value' } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
