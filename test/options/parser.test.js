'use strict'

const webpack = require('../helpers/compiler')

describe('Options', () => {
  describe('parser', () => {
    test('{String}', () => {
      const config = {
        loader: {
          test: /\.ssml$/,
          options: {
            parser: 'posthtml-sugarml'
          }
        }
      }

      return webpack('options/parser/fixture.js', config)
        .then((stats) => {
          const module = stats.toJson().modules[1]

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })

    test('{Object}', () => {
      const config = {
        loader: {
          test: /\.ssml$/,
          options: {
            parser: require('posthtml-sugarml')()
          }
        }
      }

      return webpack('options/parser/fixture.js', config)
        .then((stats) => {
          const module = stats.toJson().modules[1]

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })
  })
})
