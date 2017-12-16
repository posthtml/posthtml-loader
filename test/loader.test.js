'use strict'

const webpack = require('./helpers/compiler')

describe('Loader', () => {
  test('Defaults', () => {
    const config = {
      loader: {
        test: /\.html$/,
        options: {}
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
