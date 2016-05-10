// ------------------------------------
// #POSTHTML - LOADER
// ------------------------------------

'use strict'

var loaderUtils = require('loader-utils')

var posthtml = require('posthtml')
var postload = require('posthtml-load-plugins')

module.exports = function (source) {
  if (this.cacheable) this.cacheable()

  var plugins = this.options.posthtml || postload() || []
  var options = loaderUtils.parseQuery(this.query)

  if (typeof plugins === 'function') {
    plugins = plugins.call(this, this)
  }

  if (options.pack) {
    plugins = plugins[options.pack]
  }

  if (typeof plugins === 'undefined' || !options.pack && typeof plugins === 'object') {
    plugins = plugins.defaults || postload() || []
  }

  var loader = this
  var callback = this.async()

  posthtml(plugins)
    .process(source.toString())
    .then(result => callback(null, result.html))
    .catch((error) => {
      if (error.name === 'Error: PostHTML Loader') {
        loader.emitError(error.message + error.showSourceCode())
        callback()
      } else {
        callback(error)
      }
    })
}
