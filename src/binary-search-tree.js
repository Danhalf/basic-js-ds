const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  #findNode(node, data, boolean = false) {
    if (!node) return (boolean && false) || null;
    if (node.data === data) return (boolean && true) || false;

    return data < node.data
      ? this.#findNode(node.left, data)
      : this.#findNode(node.right, data);
  }

  add(data) {
    if (!this.rootNode) {
      return new Node(data);
    } else {
      return null;
    }
  }

  has(data) {
    console.log('data: ', data);
    this.#findNode(this.root(), data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
