'use strict'

const webpack = require('../helpers/compiler')

describe('Options', () => {
  describe('plugins', () => {
    test('{Array}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            ident: 'posthtml',
            plugins: [
              require('../fixtures/plugin')()
            ]
          }
        }
      }

      return webpack('fixture.js', config)
        .then((stats) => {
          const module = stats.toJson().modules[1]

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })

    test('{Function} - {Array}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            ident: 'posthtml',
            plugins () {
              return [
                require('../fixtures/plugin')()
              ]
            }
          }
        }
      }

      return webpack('fixture.js', config)
        .then((stats) => {
          const module = stats.toJson().modules[1]

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })

    test('{Function} - {Object}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            ident: 'posthtml',
            plugins () {
              return require('../fixtures/plugin')()
            }
          }
        }
      }

      return webpack('fixture.js', config)
        .then((stats) => {
          const module = stats.toJson().modules[1]

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })
  })
})
