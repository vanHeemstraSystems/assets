/*
 * assets.js
 */
var AssetsAsset = require(__dirname+'/asset.js');

/**
 * Create a new Assets that let users create sub-assets.
 * @return {Assets}
 */
function Assets() { }

/**
 * Create a new AssetsAsset object.
 * @return {AssetsAsset}
 */
Assets.prototype.asset = function() {
  return new AssetsAsset();
}

module.exports = Assets; 
