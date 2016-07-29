[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# PostHTML Loader <img align="right" width="200" height="220" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```sh
npm i -D html-loader posthtml-loader
```

## Usage

The posthtml loader must be used with at least one other loader in order to integrate with webpack correctly. For most use cases, the [html-loader](https://github.com/webpack/html-loader) is recommended. If you want to export the html string directly for use in javascript or webpack plugins, we recommend the [source-loader](https://github.com/static-dev/source-loader). Whichever loader you choose, it should be the first loader, followed by posthtml, as you will see in the examples below.

Options can be passed through a `posthtml` option directly on the webpack config object. It accepts an array, an object, or a function that returns an array or object. If it's an array, it should contain plugins. If it's an object, it can contain a `plugins` key, which is an array of plugins and an optional `parser` key which allows you to pass in a custom parser. Any other key will apply to the `pack` querystring parameter, documented below.

Basic configuration example:

```js
// webpack.config.js
module: {
  loaders: [{
    test: /\.html$/,
    loader: 'html!posthtml'
  }]
},
posthtml: [/* plugins here */]
```

## Options

### Plugin Packages

If you need to apply different sets of plugins to different groups of files, you can use a **plugin pack**. Just add `pack=[name]` as a querystring option, and return an object from the `posthtml` config option with a key matching the pack name, and the value being an array of plugins.

```js
// webpack.config.js
module: {
  loaders: [{
    test: /\\.special\.html$/,
    loader: 'html!posthtml?pack=special'
  }]
},
posthtml: {
  plugins: [/* plugins that apply anything that's not using a pack */],
  special: [ /* plugins specific to the "special" pack */ ],
}
```

### Custom Parser

If you want to use a custom parser, you can pass it in under the `parser` key or as query string in the loader. Below is an example with the [sugarml parser](https://github.com/posthtml/sugarml):

```js
// webpack.config.js
const sugarml = require('sugarml')

module: {
  loaders: [{
    test: /\\.special\.html$/,
    loader: 'html!posthtml'
  }]
},
posthtml: {
  plugins: [/* posthtml plugins */],
  parser: sugarml
}
```

```js
// webpack.config.js
const sugarml = require('sugarml')

module: {
  loaders: [{
    test: /\\.special\.html$/,
    loader: 'html!posthtml?parser=sugarml'
  }]
},
posthtml: {
  plugins: [/* posthtml plugins */]
}
```

### Using a Function

You can also return a function from the `posthtml` config value, if you need to for any reason. The function passes along the [loader context](https://webpack.github.io/docs/loaders.html#loader-context) as an argument, so you can get information about the file currently being processed from this and pass it to plugins if needed. For example:

```js
// webpack.config.js
module: {
  loaders: [{
    test: /\.html$/,
    loader: 'html!posthtml'
  }]
},
posthtml: (ctx) => {
  return [ plugin({ filename: ctx.resourcePath })]
}
```

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
        <br />
        <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
      </td>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/u/556932?v=3&s=150">
        <br />
        <a href="https://github.com/jescalan">Jeff Escalante</a>
      </td>
      <td align="center">
        <img width="150" height="150" src="https://avatars.githubusercontent.com/u/2789192?v=3&s=150">
        <br />
        <a href="https://github.com/Gitscrum">Ivan Demidov</a>
      </td>
    </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [CONTRIBUTING](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-loader.svg
[npm-url]: https://npmjs.com/package/posthtml-loader

[deps]: https://david-dm.org/posthtml/posthtml-loader.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-loader

[build]: http://img.shields.io/travis/posthtml/posthtml-loader.svg
[build-url]: https://travis-ci.org/posthtml/posthtml-loader

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-loader/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-loader?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
