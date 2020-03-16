const searchWidget = '.c-search-widget';
const inputField = '.c-input-field__input';

// need this to handle cursor blinking
const options = { threashold: 0.01 };

const url = process.env.LOCAL === 'true' ? 'localhost:8080' : 'https://stoutyalex.github.io/search-app';
console.log(url);

module.exports = {

  beforeEach(browser) {
    browser
    .url(url)
    .waitForElementVisible('body')
  },

  after(browser) {
    browser.end();
  },

  'Initial render': function (browser) {
    browser
      .assert.screenshotIdenticalToBaseline(searchWidget, 'initial render', options);
  },

  '1 Character in the Search input': function (browser) {
    browser
      .setVal(inputField, 'a')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Single Character', options);
  },

  'Valid Search Term in the Search input': function (browser) {
    browser
      .setVal(inputField, 'manchester')
      .waitForElementVisible('.c-search-results')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Valid Search term', options);
  },

  'Search results disapear': function (browser) {
    browser
      .setVal(inputField, 'manchester')
      .waitForElementVisible('.c-search-results')
      .setVal(inputField, 'm')
      .pause(3000)
      .assert.screenshotIdenticalToBaseline(searchWidget, 'Search Results Disapear 1 character', options);
  },

  'No Results found': function (browser) {
    browser
      .setVal(inputField, 'No Results Found')
      .waitForElementVisible('.c-search-results')
      .pause(3000)
      .assert.screenshotIdenticalToBaseline(searchWidget, 'No results found', options);
  },

  'Result with no Region in supporting text': function (browser) {
    browser.setVal(inputField, 'Abbey Road')
    .waitForElementVisible('.c-search-results')
    .assert.screenshotIdenticalToBaseline(searchWidget, 'Supporting text no region', options);
  },

  'Result with no supporting text': function (browser) {
    browser.setVal(inputField, 'Hey Jude')
    .waitForElementVisible('.c-search-results')
    .assert.screenshotIdenticalToBaseline(searchWidget, 'No supporting text', options);
  },

  'onBlur hides search results': function (browser) {
    browser
      .setVal(inputField, 'manchester')
      .waitForElementVisible('.c-search-results')
      .onBlur(inputField)
      .assert.screenshotIdenticalToBaseline(searchWidget, 'onBlur search results', options);
  },

  'onFocus reveals search results': function (browser) {
    browser
      .setVal(inputField, 'manchester')
      .waitForElementVisible('.c-search-results')
      .onBlur(inputField)
      .pause(1000)
      .onFocus(inputField)
      .waitForElementVisible('.c-search-results')
      .assert.screenshotIdenticalToBaseline(searchWidget, 'onFocus search results', options);
  },
};
