const axios = require('axios');

const fetchLocations = async (searchTerm, itemsToReturn = 6) => {
  const params = {
    solrTerm: searchTerm,
    solrIndex: 'fts_en',
    solrRows: itemsToReturn,
  };

  let data;

  try {
    const response = await axios.get('https://www.rentalcars.com/FTSAutocomplete.do', {
      params,
    });

    data = response.data.results.docs || [];
  } catch (error) {
    return [];
  }

  return data;
};

module.exports = fetchLocations;
