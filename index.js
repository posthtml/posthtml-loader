// ------------------------------------
// #POSTHTML - LOADER
// ------------------------------------

'use strict'

let posthtml = require('posthtml')
let loaderUtils = require('loader-utils')

module.exports = function (source) {
  if (this.cacheable) return this.cacheable()

  var loader = this
  var callback = this.async();

  // var file = loaderUtils.getRemainingRequest(this);
  var params = loaderUtils.parseQuery(this.query);

  var plugins = this.options.posthtml

  if (typeof plugins === 'function') {
    plugins = plugins.call(this, this)
  }

  if (typeof plugins === 'undefined') {
    plugins = []
  } else if (params.pack) {
    plugins = plugins[params.pack]
  } else if (!Array.isArray(plugins)) {
    plugins = plugins.defaults
  }

  posthtml(plugins)
    .process(source)
    .then((result) => {
      result.warnings().forEach(function (msg) {
        loader.emitWarning(msg.toString())
      })
      callback(null, result.html)
    })
}
