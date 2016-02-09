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
    plugins = []
  }

  var loader = this
  var callback = this.async()

  console.log(options)

  posthtml(plugins)
    .process(source.toString())
    .then((result) => {
      console.log(result.html)
      callback(null, result.html)
    })
    .catch((error) => {
      if (error.name === 'HTML Syntax Error') {
        loader.emitError(error.message + error.showSourceCode())
        callback()
      } else {
        callback(error)
      }
    })
}
