module.exports = (ctx) => ({
  to: 'delete.html',
  from: 'delete.html',
  plugins: [
    ctx.options.plugin ? require('../../plugin')() : false
  ]
})
