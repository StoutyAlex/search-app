module.exports.command = function(selector) {
  this.execute(function(selector) {
    const inputElement = document.querySelector(selector);
    inputElement.blur();
  }, [selector]);

  return this;
};
