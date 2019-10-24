'use strict'

class LoaderError extends Error {
  constructor (err) {
    super(err)

    this.name = 'PostHTML Loader'
    this.message = `\n\n${err.message}\n`

    // TODO(michael-ciniawsky)
    // add 'SyntaxError', 'PluginError', 'PluginWarning'

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = LoaderError
