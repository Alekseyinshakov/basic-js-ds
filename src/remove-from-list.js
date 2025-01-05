const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  
  // class ListNode {
  //   constructor(x) {
  //     this.value = x;
  //     this.next = null;
  //   }
  // }
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
    add(value) {
      if (this.length === 0) {
        this.head = new ListNode(value)
      } else {
        let curr = this.head;

        while (curr.next) {
          curr = curr.next;
        }

        curr.next = new ListNode(value)
      }
      this.length++;
    }
    removeAt(position) {
      if (position < 0 || position >= this.length) {
        return null;
      }
      let curr = this.head;

      if (position === 0) {
        this.head = curr.next;
      } else {
        let prev = null;
        let index = 0;

        while (index < position) {
          prev = curr;
          curr = curr.next;
          index++;
        }
        prev.next = curr.next;
      }
      this.length--;
      return curr.value;
    }
    removeEverywhere(element) {
      while(this.indexOf(element) !== -1) {
        this.removeAt( this.indexOf(element) )
      }
    }
    indexOf(element) {
      let curr = this.head;
      let index = 0;

      while (curr) {
        if (curr.value === element) {
          return index;
        }

        curr = curr.next;
        index++;
      }
      return -1;
    }
  }

  

  let instance = new LinkedList();

  let cu = l;
  
  
  arrrr = []
  while (cu) {
    arrrr.push(cu.value)
    cu = cu.next;
  }

  console.log(arrrr);
  
  arrrr.forEach(num => {
    instance.add(num)
  });


  
  instance.removeEverywhere(k)
  
  return instance.head;
  
}

module.exports = {
  removeKFromList
};
