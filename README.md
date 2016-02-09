# PostHTML Loader
Webpack loader for [PostHTML](https://github.com/posthtml/posthtml)

## Install

```bash
(sudo) npm i -D webpack
(sudo) npm i -D posthtml-loader
```

## Usage
### Setup

```javascript
// webpack.config.js

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
    // Add our own Plugin Packs
  }
}
```

### Options

```javascript

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html!posthtml'
      }
      {
        test: /\.include\.html$/,
        loader: 'html!posthtml?pack=includes'
      }
    ]
  },

  posthtml: function () {
    return {
      defaults: [ PostHTML Plugins ],
      includes: [ PostHTML Plugins ]
    }
  }
}
```

### Examples
with [jade-html-loader](https://github.com/bline/jade-html-loader)

```javascript

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html!posthtml!jade-html'
      }
    ]
  },

  posthtml: function () {
    return {
      defaults: [ PostHTML Plugins ]
    }
  }
}
```

with [dom-loader](https://github.com/Wizcorp/dom-loader)

```javascript

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'dom!html!posthtml'
      }
    ]
  },

  posthtml: function () {
    return {
      defaults: [ PostHTML Plugins ]
    }
  }
}
```

with [extract-text-plugin](https://github.com/webpack/extract-text-webpack-plugin)

```javascript

var ExtractText = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: ExtractText.extract('html!posthtml')
      }
    ]
  },

  posthtml: function () {
    return {
      defaults: [ PostHTML Plugins ]
    }
  },

  plugins: [
    new ExtractText('output.html')
  ]
}
```
