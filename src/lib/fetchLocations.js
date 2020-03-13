const axios = require('axios');

const fetchLocations = async (searchTerm, itemsToReturn = 6) => {
  const params = {
    solrTerm: searchTerm,
    solrIndex: 'fts_en',
    solrRows: itemsToReturn,
  };

  let response;

  try {
    response = await axios.get('https://www.rentalcars.com/FTSAutocomplete.do', {
      params,
    });
  } catch (error) {
    return [];
  }

  return response.data.results.docs || [];
};

module.exports = fetchLocations;
