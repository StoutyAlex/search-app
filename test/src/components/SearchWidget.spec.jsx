import React from 'react';
import { mount } from 'enzyme';
import { act } from '@testing-library/react-hooks';

import SearchWidget from '../../../src/components/SearchWidget';
import InputField from '../../../src/components/InputField';
import SearchResults from '../../../src/components/SearchResult';

import fetchLocations from '../../../src/lib/fetchLocations';

import locationResponse from '../../fixtures/locationResponse.json';

jest.mock('.../../../src/lib/fetchLocations');

describe('SearchWidget', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    fetchLocations.mockResolvedValue(locationResponse.data.results);
  });

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

  it('calls fetchLocations when input value is above 2', async () => {
    const wrapper = mount(<SearchWidget />);
    const input = wrapper.find('input');

    await act(async () => {
      await input.simulate('change', { target: { value: 'Hello' } });
      await jest.advanceTimersByTime(500);
    });

    expect(fetchLocations).toHaveBeenCalledWith('Hello');
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

    it('renders SearchResults when input is more than 1 character onFocus', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      await act(async () => {
        await input.simulate('change', { target: { value: 'Hello' } });
        await jest.advanceTimersByTime(1000);
        await input.simulate('focus');
      });

      expect(wrapper.find(SearchResults).exists()).toBe(true);
    });

    it('sends undefined supportingText when country and region are not defined', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      const objectWithoutSupporting = { ...locationResponse.data.results.docs[0] };

      delete objectWithoutSupporting.country;
      delete objectWithoutSupporting.region;

      fetchLocations.mockResolvedValue({ docs: [objectWithoutSupporting] });

      await act(async () => {
        await input.simulate('change', { target: { value: 'Hello' } });
        await jest.advanceTimersByTime(1000);
        await input.simulate('focus');
      });

      const searchResultWrapper = wrapper.find(SearchResults);

      expect(searchResultWrapper.exists()).toBe(true);
      expect(searchResultWrapper.props().supportingText).toBe(undefined);
    });

    it('sends just country as supportingText when region is not defined', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      const objectWithoutSupporting = { ...locationResponse.data.results.docs[0] };

      delete objectWithoutSupporting.region;

      fetchLocations.mockResolvedValue({ docs: [objectWithoutSupporting] });

      await act(async () => {
        await input.simulate('change', { target: { value: 'Hello' } });
        await jest.advanceTimersByTime(1000);
        await input.simulate('focus');
      });

      const searchResultWrapper = wrapper.find(SearchResults);


      expect(searchResultWrapper.exists()).toBe(true);
      expect(searchResultWrapper.props().results[0].supportingText).toBe(objectWithoutSupporting.country);
    });

    it('sends just region as supportingText when country is not defined', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      const objectWithoutSupporting = { ...locationResponse.data.results.docs[0] };

      delete objectWithoutSupporting.country;

      fetchLocations.mockResolvedValue({ docs: [objectWithoutSupporting] });

      await act(async () => {
        await input.simulate('change', { target: { value: 'Hello' } });
        await jest.advanceTimersByTime(1000);
        await input.simulate('focus');
      });

      const searchResultWrapper = wrapper.find(SearchResults);

      expect(searchResultWrapper.exists()).toBe(true);
      expect(searchResultWrapper.props().results[0].supportingText).toBe(objectWithoutSupporting.region);
    });

    it('hides search results when text goes back to < 1', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      await act(async () => {
        await input.simulate('change', { target: { value: 'Hello' } });
        await jest.advanceTimersByTime(500);
        await input.simulate('focus');
      });

      expect(wrapper.find(SearchResults).exists()).toBe(true);

      await act(async () => {
        await input.simulate('change', { target: { value: 'a' } });
        await jest.advanceTimersByTime(500);
        await input.simulate('focus');
      });

      expect(wrapper.find(SearchResults).exists()).toBe(false);
    });

    it('does not render SearchResults when input is onBlur', () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');
      input.simulate('blur');

      expect(wrapper.find(SearchResults).exists()).toBe(false);
    });

    it('renders SearchWidget with formatted data', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      const item = locationResponse.data.results.docs[0];

      const expectedFormatting = {
        mainText: item.name,
        supportingText: `${item.region}, ${item.country}`,
        iconType: item.placeType,
      };

      fetchLocations.mockResolvedValue({ docs: [item] });

      await act(async () => {
        await input.simulate('change', { target: { value: 'mock-data-input' } });
        await jest.advanceTimersByTime(500);
        await input.simulate('focus');
      });

      const resultWrapper = wrapper.find(SearchResults);

      expect(resultWrapper.props().results[0].mainText).toEqual(expectedFormatting.mainText);
      expect(resultWrapper.props().results[0].supportingText)
        .toEqual(expectedFormatting.supportingText);

      expect(resultWrapper.props().results[0].icon.props.type).toBe(expectedFormatting.iconType);
    });

    it('sets icon to null when result does not have a valid placeType', async () => {
      const wrapper = mount(<SearchWidget />);
      const input = wrapper.find('input');

      const item = locationResponse.data.results.docs[0];
      delete item.placeType;

      const expectedIcon = null;

      fetchLocations.mockResolvedValue({ docs: [item] });

      await act(async () => {
        await input.simulate('change', { target: { value: 'mock-data-input' } });
        await jest.advanceTimersByTime(500);
        await input.simulate('focus');
      });

      const resultWrapper = wrapper.find(SearchResults);

      expect(resultWrapper.props().results[0].icon).toBe(expectedIcon);
    });
  });
});
