# PostHTML Loader
Webpack loader for [PostHTML](https://github.com/posthtml/posthtml)

## Install

```bash
(sudo) npm i -D webpack
(sudo) npm i -D posthtml-loader
```

## Usage
# Inline

```javascript
// file.js

var html = require('html!posthtml!./file.html')
```

# Config

```javascript
// webpack.config.js || webpackfile.js

module: {
  loaders: [
    {
      test: /\.html$/,
      loader: 'html!posthtml?pack=default'
    },
  ]
}

posthtml: function () {
  return {
    default: [ PostHTML Plugins ]
    // Add Plugin Collections  
  }
}
```
