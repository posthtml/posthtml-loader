// ------------------------------------
// #POSTHTML - LOADER
// ------------------------------------

'use strict'

var fs = require('fs')
var path = require('path')
var utils = require('loader-utils')

var posthtml = require('posthtml')

module.exports = function (source) {
  if (this.cacheable) return this.cacheable()
  var loader = this
  var callback = this.async()
  // var file = utils.getRemainingRequest(this);
  var params = utils.parseQuery(this.query)
  var plugins = this.options.posthtml || []

  if (typeof plugins === 'function') {
    plugins = plugins.call(this, this)
  }

  if (typeof plugins === 'undefined') {
    plugins = []
  } else if (params.pack) {
    plugins = plugins[params.plugins]
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
      fs.writeFile(path.join(process.cwd(), result.html), () => {
        console.log('File written!')
      })
    })
}
