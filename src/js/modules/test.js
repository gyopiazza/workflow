/**
 * Test module.
 * @module test
 * @see module:app
 */
module.exports = {
  /**
   * Outputs something to the console
   * @param {string} something - The string to output in the console
   * @return {string}
   */
  do: function (something) {
    console.log(something);
  },

  /**
   * Another method that outputs something to the console
   * @param {string} somethingElse - The string to output again in the console
   * @return {string}
   */
  doSomethingElse: function (somethingElse) {
    console.log(somethingElse);
  }
};
