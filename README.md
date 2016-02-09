# PostHTML Loader
Webpack loader for [PostHTML](https://github.com/posthtml/posthtml)

## Install

```bash
(sudo) npm i -D webpack
(sudo) npm i -D posthtml-loader
```

## Usage
### Inline

```javascript
// file.js

var html = require('html!posthtml!./file.html')
```

### Config

```javascript
// webpack.config.js || webpackfile.js

module: {
  loaders: [
    {
      test: /\.html$/,
      loader: 'html!posthtml'
    },
  ]
},

posthtml: function () {
  return {
    defaults: [ PostHTML Plugins ]
    // Add Plugin Packs
  }
}
```

### Options

```javascript

module.exports = {
  module: {
    loaders: [
      {
        test: /\.includes\.html$/,
        loader: 'html!posthtml?pack=includes'
      },
      {
        test:   /\.html$/,
        loader: 'html!posthtml'
      }
    ]
  },

  posthtml: function () {
    return {
      defaults: [PostHTML Plugins],
      includes:  [PostHTML Plugins]
    }
}
```
