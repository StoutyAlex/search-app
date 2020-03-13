import axios from 'axios';
import fetchLocations from '../../../src/lib/fetchLocations';

import locationResponse from '../../fixtures/locationResponse.json';

jest.mock('axios');

describe('fetchLocations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.get.mockResolvedValue(locationResponse);
  });

  it('should make get request to location endpoint', async () => {
    await fetchLocations();

    const url = axios.get.mock.calls[0][0];

    // Maybe put the url into config
    expect(url).toEqual('https://www.rentalcars.com/FTSAutocomplete.do');
  });

  it('should add searchTerm into params', async () => {
    const searchTerm = 'Manchester';

    await fetchLocations(searchTerm);
    const params = axios.get.mock.calls[0][1];

    expect(params.params.solrTerm).toEqual(searchTerm);
  });

  it('should add solrIndex into params', async () => {
    await fetchLocations('');
    const params = axios.get.mock.calls[0][1];

    expect(params.params.solrIndex).toEqual('fts_en');
  });

  it('should add solrRows into params - defaulted to 6', async () => {
    await fetchLocations('');
    const params = axios.get.mock.calls[0][1];

    expect(params.params.solrRows).toBe(6);
  });

  it('should add custom solrRows value into params', async () => {
    await fetchLocations('', 4);
    const params = axios.get.mock.calls[0][1];

    expect(params.params.solrRows).toBe(4);
  });

  it('should return docs array from response', async () => {
    const result = await fetchLocations('');
    expect(result).toBe(locationResponse.data.results.docs);
  });

  it('should return empty array when error fetching data', async () => {
    axios.get.mockRejectedValue('failed');

    const result = await fetchLocations('');

    expect(result).toEqual([]);
  });

  it('should return empty array if data api changes', async () => {
    axios.get.mockResolvedValue({ data: { results: { locations: [] } } });

    const result = await fetchLocations('');

    expect(result).toEqual([]);
  });
});
