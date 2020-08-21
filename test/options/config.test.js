'use strict'

const webpack = require('../helpers/compiler')

describe('Options', () => {
  describe('config', () => {
    test('path - {String}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            config: {
              path: 'test/fixtures/posthtml.config.js'
            }
          }
        }
      }

      return webpack('fixture.js', config)
        .then((stats) => {
          const [module] = stats.toJson().modules

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })

    test('ctx - {Object}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            config: {
              path: 'test/fixtures/options/config/posthtml.config.js',
              ctx: { plugin: true }
            }
          }
        }
      }

      return webpack('fixture.js', config)
        .then((stats) => {
          const [module] = stats.toJson().modules

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })
  })
})
