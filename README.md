[![webpack](https://webpack.github.io/assets/logo.png)](https://webpack.github.io) <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

# Loader for [PostHTML](https://github.com/posthtml/posthtml)
# Install

```bash

(sudo) npm i -D posthtml-loader
```

[![npm](https://badge.fury.io/js/posthtml-loader.svg)](https://badge.fury.io/js/posthtml-loader) [![dependencies](https://david-dm.org/michael-ciniawsky/posthtml-loader.svg)](https://david-dm.org/michael-ciniawsky/posthtml-loader)

# Usage
## Setup

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

## Options

```javascript

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html!posthtml?pack=html'
      }
      {
        test: /\.svg$/,
        loader: 'svg!posthtml?pack=svg'
      }
    ]
  },

  posthtml: function () {
    return {
      defaults: [],
      html: [ PostHTML Plugins ],
      svg: [ PostHTML Plugins ]
    }
  }
}
```

## Extract
[extract-text-plugin](https://github.com/webpack/extract-text-webpack-plugin)

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
    new ExtractText('file.html')
  ]
}
```

# Integration
## Templates
### EJS
[ejs-html-loader](https://github.com/bline/jade-html-loader)

```javascript

{ test: /\.ejs$/, loader: 'html!posthtml!ejs-html' }
```

#### Jade
[jade-html-loader](https://github.com/bline/jade-html-loader)

```javascript

{ test: /\.jade$/, loader: 'html!posthtml!jade-html' }
```

### Templates supported by [consolidate](https://github.com/tj/consolidate.js)
[template-html-loader](https://github.com/bline/jade-html-loader)

```javascript

{ test: /\.hbs$/, loader: 'html!posthtml!template-html?engine=handlebars' }
```

## String
### HTML
[html-loader](https://github.com/webpack/html-loader)

```javascript

{ test: /\.html$/, loader: 'html!posthtml' }
```

### SVG
[svg-loader](https://github.com/dolbyzerr/svg-loader)

```javascript

{ test: /\.svg$/, loader: 'svg!posthtml' }
```

### XML
[xml-loader](https://github.com/gisikw/xml-loader)

```javascript

{ test: /\.xml$/, loader: 'xml!posthtml' }
```

## File
[file-loader](https://github.com/webpack/file-loader) && [val-loader](https://github.com/webpack/val-loader)

### HTML
[html-loader](https://github.com/webpack/html-loader)

```javascript

{ test: /\.html$/, loader: 'file?name=[name].[ext]!val!html!posthtml' }
```

### SVG
[svg-loader](https://github.com/dolbyzerr/svg-loader)

```javascript

{ test: /\.svg$/, loader: 'file?name=[name].[ext]!val!svg!posthtml' }
```

## DOM
[dom-loader](https://github.com/Wizcorp/dom-loader)

### HTML
[html-loader](https://github.com/webpack/html-loader)

```javascript

{ test: /\.html$/, loader: 'dom!html!posthtml' }
```

### SVG
[svg-loader](https://github.com/dolbyzerr/svg-loader)

```javascript

{ test: /\.svg$/, loader: 'dom!svg!posthtml' }
```
