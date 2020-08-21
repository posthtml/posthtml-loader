'use strict'

const path = require('path')

const loaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = require('./options.json')

const posthtml = require('posthtml')
const posthtmlrc = require('posthtml-load-config')

const parseOptions = require('./options')

const LoaderError = require('./Error')
/**
 * PostHTML Loader
 *
 * @author Michael Ciniawsky <michael.ciniawsky@gmail.com> (@michael-ciniawsky)
 * @license MIT
 *
 * @version 1.0.0
 *
 * @requires loader-utils
 * @requires schema-utils
 *
 * @requires posthtml
 * @requires posthtml-load-config
 *
 * @method posthtml-loader
 *
 * @param  {String} html HTML
 *
 * @return {String} html HTML
 */
module.exports = function loader (html, map, meta) {
  // Loader Options
  const options = loaderUtils.getOptions(this) || {}

  validateOptions(schema, options, { name: 'PostHTML Loader', baseDataPath: 'options' })

  // Make the loader async
  const cb = this.async()
  const file = this.resourcePath

  Promise.resolve().then(() => {
    const length = Object.keys(options)
      .filter((option) => {
        switch (option) {
          case 'ident':
          case 'config':
            return
          default:
            return option
        }
      })
      .length

    if (length) {
      return parseOptions.call(this, options)
    }

    const rc = {
      path: path.dirname(file),
      ctx: {
        file: {
          extname: path.extname(file),
          dirname: path.dirname(file),
          basename: path.basename(file)
        },
        options: {}
      }
    }

    if (options.config) {
      if (options.config.path) {
        rc.path = path.resolve(options.config.path)
      }

      if (options.config.ctx) {
        rc.ctx.options = options.config.ctx
      }
    }

    return posthtmlrc(rc.ctx, rc.path, { argv: false })
  })
    .then((config) => {
      if (!config) config = {}

      if (config.file) this.addDependency(config.file)

      if (config.options) {
      // Disable overriding `options.to` (`posthtml.config.js`)
        if (config.options.to) delete config.options.to
        // Disable overriding `options.from` (`posthtml.config.js`)
        if (config.options.from) delete config.options.from
      }

      const plugins = config.plugins || []
      const options = Object.assign(
        { from: file, to: file },
        config.options
      )

      if (typeof options.parser === 'string') {
        options.parser = require(options.parser)()
      }

      if (typeof options.render === 'string') {
        options.render = require(options.render)()
      }

      return posthtml(plugins)
        .process(html, options)
        .then((result) => {
          if (result.messages) {
            result.messages.forEach((msg) => {
              switch (msg.type) {
                case 'error':
                  this.emitError(msg.message)

                  break
                case 'warning':
                  this.emitWarning(msg.message)

                  break
                case 'dependency':
                  this.addDependency(msg.file)

                  break
                default:
                  break
              }
            })
          }

          html = result.html

          if (this.loaderIndex === 0) {
            html = `export default \`${html}\``

            cb(null, html)

            return null
          }

          if (!meta) meta = {}

          meta.ast = { type: 'posthtml', root: result.tree }
          meta.messages = result.messages

          cb(null, html, map, meta)

          return null
        })
    })
    .catch((err) => {
      cb(new LoaderError(err))

      return null
    })
}
