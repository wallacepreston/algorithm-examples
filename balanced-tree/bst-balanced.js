class BinaryNode {
  constructor(val){
      this.value = val;
      this.left = null;
      this.right = null;
  }
}
class BinarySearchTree {
  // BinarySearchTree constructor function
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  // BinarySearchTree.prototype.insert
  insert (val) {
    let direction
    if(val < this.value){
      direction = 'left';
    }
    else{
      direction = 'right';
    }
    if(this[direction] === null){
      this[direction] = new BinarySearchTree(val);
    }
    else{
      this[direction].insert(val);
    }
    return this; // for chaining, do not edit
  }

  // BinarySearchTree.prototype.min
  min () {
    // THIS IS TAIL RECURSION
    if (this.left === null){
      return this.value;
    }
    else {
      return this.left.min();
    }
  }

  // BinarySearchTree.prototype.max
  max () {
    // THIS IS TAIL RECURSION
    if (this.right === null){
      return this.value;
    }
    else {
      return this.right.max();
    }
  }

  // BinarySearchTree.prototype.contains
  contains (val) {
    let direction
    if (this.value === val){
      return true;
    }
    if (val < this.value){
      direction = 'left';
    }
    else {
      direction = 'right';
    }
    if (this[direction] !== null){
      return this[direction].contains(val);
    }
    else {
      return false;
    }
  }

  // BinarySearchTree.prototype.traverse
  traverse (callbackFunc) {
    if (this.left) this.left.traverse(callbackFunc);
    callbackFunc(this.value);
    if (this.right) this.right.traverse(callbackFunc);
  }
}

const getHeight = (root) => {
  console.log(root ? root.value : null)
  if (root === null) { // Base case
    return 0; 
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

const isBalanced = (root) => {
  if (root === null) { // Base case
    return true;
  }
  if (! (isBalanced(root.left) && isBalanced(root.right))) return false
  var heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right));
  if (heightDifference > 1) {
    return false;
  } else {
    return true;
  }
}

const bstImbalanced = new BinarySearchTree(5);
bstImbalanced.insert(2);
bstImbalanced.insert(1);
bstImbalanced.insert(1);
bstImbalanced.insert(1);
bstImbalanced.insert(1);
bstImbalanced.insert(6);
bstImbalanced.insert(6);
bstImbalanced.insert(6);
bstImbalanced.insert(5);


const bstBalanced = new BinarySearchTree(5);
bstBalanced.insert(6);
bstBalanced.insert(4);
bstBalanced.insert(7);
bstBalanced.insert(3);


console.log(isBalanced(bstImbalanced));
