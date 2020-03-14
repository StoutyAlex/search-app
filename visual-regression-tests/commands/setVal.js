
module.exports.command = function (selectors, text) {
  this.execute(function (selector,) {
    document.querySelector(selector).value = '';
  }, [selectors]);

  this.setValue(selectors, text);
};
