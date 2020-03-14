const searchWidget = '.c-search-widget';

module.exports = {
  after: function (browser) {
    browser.end();
  },

  'Initial render': function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'initial render');
  },

  '1 Character in the Search input': function (browser) {
    browser
      .setValue('.c-input-field__input', 'a')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Single Character');
  },

  'Valid Search Term in the Search input': function (browser) {
    browser
      .setValue('.c-input-field__input', 'manchester')
      .waitForElementVisible('.c-search-results')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Valid Search term');
  },

  'Search results disapear': function (browser) {
    browser
      .clearVal('.c-input-field__input')
      .setValue('.c-input-field__input', 'manchester')
      .waitForElementVisible('.c-search-results')
      .setValue('.c-input-field__input', 'm')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Search Results Disapear');
  },

  // 'Enter a multiple characters in the location search field': function (browser) {
  //   browser
  //     .setValue('#pickupLocation', 'thens')
  //     .waitForElementVisible('.c-search-results')
  //     .assert.screenshotIdenticalToBaseline(searchBox, 'Multiple Characters', options)
  // }
};
