import getPlaceType from '../../../src/lib/getPlaceType';

describe('getPlaceType', () => {
  it('returns Airport when type is A', () => {
    expect(getPlaceType('A')).toBe('Airport');
  });

  it('returns undefined when type is not valid', () => {
    expect(getPlaceType('INVALID')).toBe(undefined);
  });
});
