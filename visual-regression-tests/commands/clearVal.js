
module.exports.command = function (selectors) {
  this.execute(function (selector) {
    document.querySelector(selector).value = '';
  }, [selectors]);
};
