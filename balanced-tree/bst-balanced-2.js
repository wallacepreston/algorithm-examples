'use strict';

function BinarySearchTree() {
  this.root = null;
}

var Util = {

  getHeight : function (root) {
    if (root === null) { // Base case
      return 0; 
    }
    return Math.max(Util.getHeight(root.left), Util.getHeight(root.right)) + 1;
  },

  isBalanced : function (root) {
    if (root === null) { // Base case
      return true;
    }
    var heightDifference = Math.abs(Util.getHeight(root.left) - Util.getHeight(root.right));
    if (heightDifference > 1) {
      return false;
    } else {
      return Util.isBalanced(root.left) && Util.isBalanced(root.right);
    }
  }

};

// Create a new Balanced Binary Tree as a sample input
// http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
var BST = new BinarySearchTree();
BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
// BST.insertNode(13);

// Find if the given tree is balanced or not
console.log(Util.isBalanced(BST.root)); // true

// Un-comment L#39 to make tree imbalanced
// console.log(Util.isBalanced(BST.root)); // false