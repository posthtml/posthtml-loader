'use strict'

describe('Errors', () => {
  test('Validation Error', () => {
    const loader = require('../lib')

    const error = () => loader.call({ query: { plugins: 1 } })

    expect(error).toThrow()
    expect(error).toThrowErrorMatchingSnapshot()
  })
})
