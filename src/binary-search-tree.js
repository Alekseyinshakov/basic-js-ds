const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.begin = null;
  }
  root() {
    return this.begin;
  }

  add(data) {
    this.begin = addElem(this.begin, data)

    function addElem(node, data) {
      if (!node) {
        return new Node(data)
      } else if (node.data === data) {

      } else if (data < node.data) {
        node.left = addElem(node.left, data)
      } else {
        node.right = addElem(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  find(data) {
    return getNode(this.begin, data);

    function getNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return getNode(node.left, data)
      } else {
        return getNode(node.right, data)
      }
    }
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

let obj = new BinarySearchTree()
obj.add(10);
obj.add(15);
obj.add(7);
obj.add(22);
console.log(obj.has(22));



module.exports = {
  BinarySearchTree
};