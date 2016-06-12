/*
 * Filename: index.js
 */
var AssetBootstrap = require(__dirname+'/bootstrap.js');
var AssetJQuery = require(__dirname+'/jquery.js');
var AssetRaphael = require(__dirname+'/raphael.js');
var AssetTether = require(__dirname+'/tether.js');

var self = this; 

function Asset() {
  console.log('assets asset - Asset called');
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._foo = 'bar';  // placeholder
} 

Asset.prototype.foo = function() {
  return self._foo;
}

Asset.prototype.setfoo = function(fnOrValue) {
  self._foo = fnOrValue;
}

/**
 * Create a new AssetBootstrap object.
 * @return {AssetBootstrap}
 */
Asset.prototype.bootstrap = function() {
  return new AssetBootstrap();
}

/**
 * Create a new AssetJQuery object.
 * @return {AssetJQuery}
 */
Asset.prototype.jquery = function() {
  return new AssetJQuery();
}

/**
 * Create a new AssetRaphael object.
 * @return {AssetRaphael}
 */
Asset.prototype.raphael = function() {
  return new AssetRaphael();
}

/**
 * Create a new AssetTether object.
 * @return {AssetTether}
 */
Asset.prototype.tether = function() {
  return new AssetTether();
}

module.exports = Asset;