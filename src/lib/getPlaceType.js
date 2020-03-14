
const typeMap = {
  D: 'District',
  I: 'Region',
  F: 'Region',
  G: 'Place',
  A: 'Airport',
  C: 'City',
  T: 'Station',
};

export default (type) => typeMap[type];
