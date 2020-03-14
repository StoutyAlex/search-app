const searchWidget = '.c-search-widget';

module.exports = {
  after(browser) {
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
      .setVal('.c-input-field__input', 'a')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Single Character');
  },

  'Valid Search Term in the Search input': function (browser) {
    browser
      .setVal('.c-input-field__input', 'manchester')
      .waitForElementVisible('.c-search-results')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Valid Search term');
  },

  'Search results disapear': function (browser) {
    browser
      .setVal('.c-input-field__input', 'manchester')
      .waitForElementVisible('.c-search-results')
      .setVal('.c-input-field__input', 'm')
      .pause(3000)
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Search Results Disapear');
  },

  'No Results found': function (browser) {
    browser
      .setVal('.c-input-field__input', 'No Results Found')
      .waitForElementVisible('.c-search-results')
      .pause(3000)
      .assert.screenshotIdenticalToBaseline(searchWidget, 'No results found');
  },
};
