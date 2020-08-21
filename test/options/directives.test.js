'use strict'

const webpack = require('../helpers/compiler')

describe('Options', () => {
  describe('directives', () => {
    test('{Array}', () => {
      const config = {
        loader: {
          test: /\.html$/,
          options: {
            directives: [{
              name: '?php',
              start: '<',
              end: '>',
          }]
          }
        }
      }

      return webpack('options/directives/fixture.js', config)
        .then((stats) => {
          const [module] = stats.toJson().modules

          expect(module.source).toMatchSnapshot()
        })
        .catch((err) => err)
    })
  })
})
