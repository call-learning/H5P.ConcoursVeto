/**
 * Emulates H5P library for tests
 */

var H5P = {};
var H5PIntegration = {};

H5P.t = function (key, vars) {
  return '[' + key + (vars? ':' + JSON.stringify(vars): '') + ']';
} // Emulate translation function
H5P.getPath = function (srcpath, contentId) {
  return srcpath;
}
H5PIntegration.siteUrl='/';
H5P.EventDispatcher = function () {};
H5P.EventDispatcher.prototype = {
  on: function () {},
  off: function () {},
  trigger: function () {}
};

H5P.EventDispatcher.call = function (instance) {
  H5P.EventDispatcher.apply(instance);
};

window.H5P = H5P;
