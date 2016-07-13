var test = require('ava')
var loader = require('../index.js')

test('Should return a function', t => {
  t.true(typeof loader === 'function')
})
