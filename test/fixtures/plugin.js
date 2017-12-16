'use strict'

module.exports = function plugin (options) {
  options = Object.assign({}, options)

  return function (tree) {
    tree.walk((node) => {
      if (node.tag === 'div') node.tag = 'section'

      return node
    })

    return tree
  }
}
