const test = require('ava')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const customElements = require('posthtml-custom-elements')
const fixtures = path.join(__dirname, 'fixtures')

test.cb('basic', (t) => {
  const testPath = path.join(fixtures, 'basic')
  webpack({
    entry: { output: [path.join(testPath, 'app.js')] },
    output: { path: testPath },
    resolveLoader: { root: path.resolve('..') },
    module: {
      loaders: [{ test: /\.html$/, loader: 'source!index' }]
    },
    posthtml: [customElements()]
  }, (err, stats) => {
    if (err) return t.end(err)
    if (stats.compilation.errors.length) return t.end(stats.compilation.errors)
    const src = fs.readFileSync(path.join(testPath, 'bundle.js'), 'utf8')
    t.truthy(src.match(/<div class=\\"custom\\">hello world<\/div>/))
    t.end()
  })
})
