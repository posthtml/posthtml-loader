// ------------------------------------
// #POSTHTML - LOADER
// ------------------------------------

'use strict'

let loaderUtils = require('loader-utils')

let posthtml = require('posthtml')

module.exports = function (source) {
  if (this.cacheable) this.cacheable()

  var plugins = this.options.posthtml || []
  var options = loaderUtils.parseQuery(this.query)

  if (typeof plugins === 'function') {
    plugins = plugins.call(this, this)
  }
  if (options.pack) {
    plugins = plugins[options.pack]
  }
  if (typeof plugins === 'undefined' || typeof plugins === 'object') {
    plugins = plugins.defaults || []
  }

  var loader = this
  var callback = this.async()

  posthtml(plugins)
    .process(source.toString())
    .then(result => callback(null, result.html))
    .catch((error) => {
      if (error.name === 'HTML Syntax Error') {
        loader.emitError(error.message + error.showSourceCode())
        callback()
      } else {
        callback(error)
      }
    })
}
