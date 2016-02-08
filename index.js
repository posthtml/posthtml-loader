// ------------------------------------
// #POSTHTML - LOADER
// ------------------------------------

'use strict'

let loaderUtils = require('loader-utils')

let posthtml = require('posthtml')

module.exports = function (source) {
  if (this.cacheable) this.cacheable()

  var loader = this
  var plugins = this.options.posthtml || []

  if (typeof plugins === 'function') {
    plugins = plugins.call(this, this)
  }
  if (options.pack) {
    plugins = plugins[options.pack]
  }
  if (typeof plugins === 'undefined') {
    plugins = []
  }

  var file = loaderUtils.getRemainingRequest(this)
  var options = loaderUtils.parseQuery(this.query)

  console.log(file)
  console.log(options)

  posthtml(plugins)
    .process(source.toString())
    .then((result) => {
      console.log(result.html)
      this.callback(null, result.html)
    })
    .catch((error) => {
      if (error.name === 'HTML Syntax Error') {
        loader.emitError(error.message + error.showSourceCode())
        this.callback()
      } else {
        this.callback(error)
      }
    })
}
