// ------------------------------------
// #POSTHTML - LOADER
// ------------------------------------

'use strict'

let loaderUtils = require('loader-utils')

let path = require('path')
let posthtml = require('posthtml')

module.exports = function (source) {
  this.cacheable && this.cacheable()

  var loader = this
  var options = loaderUtils.parseQuery(this.query)
  var plugins = this.options.posthtml

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
  var filename = path.basename(file)

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
