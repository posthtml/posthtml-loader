[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![code style][style]][style-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/posthtml/posthtml">
    <img width="220" height="200" title="PosHTML"           src="http://posthtml.github.io/posthtml/logo.svg">
  </a>
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>PostHTML Loader</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-loader
```

<h2 align="center">Usage</h2>

```js
import html from './file.html'
```

**webpack.config.js**
```js
module: {
  rules: [
    {
      test: /\.html$/,
      use: [
        'html-loader',
        {
          loader: 'posthtml-loader',
          options: {
            ident: 'posthtml',
            parser: 'PostHTML Parser',
            plugins: [
              /* PostHTML Plugins */
              require('posthtml-plugin')(options)
            ]
          }
        }
      ]
    }
  ]
},
```

<h2 align="center">Options</h2>

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`config`](#config)**|`{Object}`|`undefined`|PostHTML Config|
|**[`parser`](#parser)**|`{String/Function}`|`undefined`|PostHTML Parser|
|**[`skipParse`](#skipParse)**|`{Boolean}`|`false`|PostHTML Options SkipParse|
|**[`render`](#render)**|`{String/Function}`|`undefined`|PostHTML Render|
|**[`plugins`](#plugins)**|`{Array/Function}`|`[]`|PostHTML Plugins|
|**[`sync`](#sync)**|`{boolean}`|`false`|PostHTML Options Sync|
|**[`directives`](#directives)**|`{Array<Object>}`|`[]`|PostHTML Options custom [Directives](https://github.com/posthtml/posthtml-parser#directives)|

### `Config`

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`path`](#path)**|`{String}`|`loader.resourcePath`|PostHTML Config Path|
|**[`ctx`](#context)**|`{Object}`|`{}`|PostHTML Config Context|


If you want to use are shareable config file instead of inline options in your `webpack.config.js` create a `posthtml.config.js` file and place it somewhere down the file tree in your project. The nearest config relative to `dirname(file)` currently processed by the loader applies. This enables **Config Cascading**. Despite some edge cases the config file will be loaded automatically and **no** additional setup is required. If you don't intend to use Config Cascading, it's recommended to place `posthtml.config.js` in the **root** `./` of your project

```
src
├── components
│   ├──  component.html
│   ├──  posthtml.config.js (components)
├── index.html
├── posthtml.config.js (index)
└── webpack.config.js
```

#### `Path`

If you normally place all your config files in a separate folder e.g `./config` it is necessary to explicitly set the config path in `webpack.config.js`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    config: {
      path: 'path/to/.config/'
    }
  }
}
```

#### `Context`

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|`env`|`{String}`|`'development'`|process.env.NODE_ENV|
|`file`|`{Object}`|`{ dirname, basename, extname }`|File|
|`options`|`{Object}`|`{}`|Plugin Options (Context)|

[**posthtml.config.js**](https://github.com/posthtml/posthtml-load-config)
```js
module.exports = ({ file, options, env }) => ({
  parser: 'posthtml-sugarml',
  plugins: {
    'posthtml-include': options.include,
    'posthtml-content': options.content,
    'htmlnano': env === 'production' ? {} : false
  }
})
```

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    config: {
      ctx: {
        include: {...options},
        content: {...options}
      }
    }
  }
}
```

### `Parser`

If you want to use a custom parser e.g [SugarML](https://github.com/posthtml/sugarml), you can pass it in under the `parser` key in the loader options

#### `{String}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    parser: 'posthtml-sugarml'
  }
}
```

#### `{Function}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    parser: require('posthtml-sugarml')()
  }
}
```

### `skipParse`

If you want to use disable parsing, you can pass it in under the `skipParse` key in the loader options

#### `{Boolean}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    skipParse: false
  }
}
```

### `Render`

If you want to use a custom render, you can pass it in under the `render` key in the loader options

#### `{String}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    render: 'posthtml-you-render'
  }
}
```

#### `{Function}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    parser: require('posthtml-you-render')()
  }
}
```

### `Plugins`

Plugins are specified under the `plugins` key in the loader options

#### `{Array}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    plugins: [
      require('posthtml-plugin')()
    ]    
  }
}
```

#### `{Function}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    plugins (loader) {
      return [
        require('posthtml-plugin')()
      ]
    }
  }
}
```

### `Sync`

Enables sync mode, plugins will run synchronously, throws an error when used with async plugins

#### `{Boolean}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    sync: true
  }
}
```

### `Directives`

If you want to use a custom directives, you can pass it in under the `directives` key in the loader options

#### `{Array}`

**webpack.config.js**
```js
{
  loader: 'posthtml-loader',
  options: {
    directives: [{name: '?php', start: '<', end: '>'}]
  }
}
```

<h2 align="center">Maintainer</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://github.com/michael-ciniawsky.png?v=3&s=150">
        <br />
        <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
      </td>
      <td align="center">
        <img width="150" height="150" src="https://github.com/Scrum.png?v=3&s=150">
        <br />
        <a href="https://github.com/Scrum">Ivan Demidov</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/posthtml-loader.svg
[npm-url]: https://npmjs.com/package/posthtml-loader

[node]: https://img.shields.io/node/v/posthtml-loader.svg
[node-url]: https://nodejs.org/

[deps]: https://david-dm.org/posthtml/posthtml-loader.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-loader

[tests]: http://img.shields.io/travis/posthtml/posthtml-loader.svg
[tests-url]: https://travis-ci.org/posthtml/posthtml-loader

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-loader/badge.svg
[cover-url]: https://coveralls.io/github/posthtml/posthtml-loader

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-url]: https://gitter.im/posthtml/posthtml
