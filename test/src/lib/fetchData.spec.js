import axios from 'axios';
import fetchData from '../../../src/lib/fetchData';

jest.mock('axios');

describe('fetchData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should make call to url', async () => {
    const url = 'www.google.com';

    await fetchData(url);

    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
