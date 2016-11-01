/**
 * The main application module
 * @namespace app
 * @module app
 * @version 0.1
 */
var test = require('./modules/test');

/** Testing 'test' module */
test.do('something');

/** DOM test from the main app module */
(function () {
  var doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');
}());
