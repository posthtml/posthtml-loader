'use strict'

module.exports = function parseOptions (params) {
  let { plugins, ...options } = params

  if (typeof plugins === 'function') {
    plugins = plugins.call(this, this)
  }

  if (typeof plugins === 'undefined') plugins = []
  else if (!Array.isArray(plugins)) plugins = [plugins]

  return Promise.resolve({ options, plugins })
}
