var test = require('ava')
var loader = require('../index.js')

test('Should retur a function', t => {
  t.true(typeof loader === 'function')
})
