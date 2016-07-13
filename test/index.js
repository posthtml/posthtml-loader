const test = require('ava')
const loader = require('..')

test('should return a function', (t) => {
  t.truthy(typeof loader === 'function')
})
