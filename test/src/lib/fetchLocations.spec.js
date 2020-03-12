import axios from 'axios';
import fetchLocations from '../../../src/lib/fetchLocations';

jest.mock('axios');

describe('fetchLocations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should make call to url', async () => {
    const url = 'www.google.com';

    await fetchLocations(url);

    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
