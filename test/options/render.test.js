'use strict'

const webpack = require('../helpers/compiler')

describe('Options', () => {
  describe('render', () => {
    test('{String}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            render: 'posthtml-render'
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
          test: /\.html$/,
          options: {
            parser: require('posthtml-render')()
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
