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

### Template
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

### Integration
#### Template Engines
##### EJS
[ejs-html-loader](https://github.com/bline/jade-html-loader)

```javascript

{ test: /\.ejs$/, loader: 'html!posthtml!ejs-html' }
```

##### HBS
[handlebars-loader](https://github.com/altano/handlebars-loader)

```javascript

{ test: /\.hbs$/, loader: 'html!posthtml!handlebars-template' }
```

##### Jade
[jade-html-loader](https://github.com/bline/jade-html-loader)

```javascript

{ test: /\.jade$/, loader: 'html!posthtml!jade-html' }
```

##### Templates Engines supported by [consolidate](https://github.com/tj/consolidate.js)
[template-html-loader](https://github.com/bline/jade-html-loader)

```javascript

{ test: /\.hogan$/, loader: 'html!posthtml!template-html?engine=hogan' }
```

#### String
##### HTML
[html-loader](https://github.com/webpack/html-loader)

```javascript

{ test: /\.xml$/, loader: 'html!posthtml' }
```

##### SVG
[svg-loader](https://github.com/dolbyzerr/svg-loader)

```javascript

{ test: /\.xml$/, loader: 'svg!posthtml' }
```

##### XML
[xml-loader](https://github.com/gisikw/xml-loader)

```javascript

{ test: /\.xml$/, loader: 'xml!posthtml' }
```

#### File
[file-loader](https://github.com/webpack/file-loader) && [val-loader](https://github.com/webpack/val-loader)

##### HTML
[html-loader](https://github.com/webpack/html-loader)

```javascript

{ test: /\.html$/, loader: 'file?name=[name].[ext]!val!html!posthtml' }
```

##### SVG
[svg-loader](https://github.com/dolbyzerr/svg-loader)

```javascript

{ test: /\.svg$/, loader: 'file?name=[name].[ext]!val!svg!posthtml' }
```

#### DOM
##### HTML
[dom-loader](https://github.com/Wizcorp/dom-loader) [html-loader](https://github.com/webpack/html-loader)

```javascript

{ test: /\.html$/, loader: 'dom!html!posthtml' }
```

##### SVG
[dom-loader](https://github.com/Wizcorp/dom-loader) [svg-loader](https://github.com/dolbyzerr/svg-loader)

```javascript

{ test: /\.svg$/, loader: 'dom!svg!posthtml' }
```
