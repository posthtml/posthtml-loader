[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Code Style][style]][style-url]
[![License MIT][license]][license-url]

[![webpack][webpack]](https://webpack.github.io) <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

# Loader for [PostHTML](https://github.com/posthtml/posthtml)

| Branch               | Build                     | Coverage                 |
|:--------------------:|:-------------------------:|:------------------------:|
|  Master              | ![travis]                 | ![cover]                 |
|  Develop             | ![travis-dev]             | ![cover-dev]             |
|  Release v1.0.0      | ![travis-rel-1.0.0]       | ![cover-rel-1.0.0]       |

# Install

```bash
(sudo) npm i -D html-loader posthtml-loader
```

# Usage
## Setup

```js
// webpack.config.js
module: {
  loaders: [
    {
      test: /\.html$/,
      loader: 'html!posthtml'
    },
  ]
},

posthtml: () => {
  return {
    defaults: [ /* PostHTML Plugins */ ]
  }
}
```

## Options

```js
// webpack.config.js
module: {
  loaders: [
    {
      test: /\.html$/,
      loader: 'html!posthtml?pack=html'
    }
  ]
},

posthtml: () => {
  return {
    defaults: [],
    html: [ /* PostHTML Plugins */ ],
  }
}
```

## [Extract Text][extract-text-plugin]

```js
// webpack.config.js
const ExtractText = require('extract-text-webpack-plugin')

module: {
  loaders: [
    {
      test: /\.html$/,
      loader: ExtractText.extract('html!posthtml')
    }
  ]
},

posthtml: () => {
  return {
    defaults: [ /* PostHTML Plugins */ ]
  }
},

plugins: [
  new ExtractText('[name].html')
]
```

# Integration
## [Template][template-html-loader] Loader

```javascript
{
  test: /\.hbs$/,
  loader: 'html!posthtml!template-html?engine=handlebars'
}
```

## String
### [HTML][html-loader]

```js
{
  test: /\.html$/,
  loader: 'html!posthtml'
}
```

### [SVG][svg-loader]

```js
{
  test: /\.svg$/,
  loader: 'svg!posthtml'
}
```

## [File][file-loader] && [Val][val-loader] Loader
### [HTML][html-loader]

```js
{
  test: /\.html$/,
  loader: 'file?name=[name].[ext]!val!html!posthtml'
}
```

### [SVG][svg-loader]

```js
{
  test: /\.svg$/,
  loader: 'file?name=[name].[ext]!val!svg!posthtml'
}
```

## [DOM](https://github.com/Wizcorp/dom-loader) Loader
### [HTML][html-loader]

```js

{
  test: /\.html$/,
  loader: 'dom!html!posthtml'
}
```

### [SVG][svg-loader]

```js
{
  test: /\.svg$/,
  loader: 'dom!svg!posthtml'
}
```

[webpack]: https://webpack.github.io/assets/logo.png
[extract-text-plugin]: https://github.com/webpack/extract-text-webpack-plugin

[val-loader]: https://github.com/webpack/val-loader
[dom-loader]: https://github.com/Wizcorp/dom-loader
[svg-loader]: https://github.com/dolbyzerr/svg-loader
[file-loader]: https://github.com/webpack/file-loader
[html-loader]: https://github.com/webpack/html-loader
[template-html-loader]: https://github.com/bline/jade-html-loader

[npm]: https://img.shields.io/npm/v/posthtml-loader.svg
[npm-url]: https://npmjs.com/package/posthtml-loader

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/posthtml-loader.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-loader

[devdeps]: https://david-dm.org/posthtml/posthtml-loader/dev-status.svg
[devdeps-url]: https://david-dm.org/posthtml/posthtml-loader#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-loader.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-loader

[travis-dev]: http://img.shields.io/travis/posthtml/posthtml-loader.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/posthtml/posthtml-loader?branch=develop

[travis-rel-1.0.0]: https://travis-ci.org/posthtml/posthtml-loader.svg?branch=release/1.0.0
[travis-rel-1.0.0-url]:https://travis-ci.org/posthtml/posthtml-loader?branch=release/1.0.0

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-loader/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-loader?branch=master

[cover-dev]: https://coveralls.io/repos/github/posthtml/posthtml-loader/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/posthtml/posthtml-loader?branch=develop

[cover-rel-1.0.0]: https://coveralls.io/repos/github/posthtml/posthtml-loader/badge.svg?branch=release/1.0.0
[cover-rel-1.0.0-url]: https://coveralls.io/github/posthtml/posthtml-loader?branch=release/1.0.0

[license]: https://img.shields.io/github/license/posthtml/posthtml-loader.svg
[license-url]: https://raw.githubusercontent.com/posthtml/posthtml-loader/master/LICENSE
