// very fast to search through and retrieve data from
// insert and delete => very fast
// in a balanced bst of 4000 nodes, 
// it takes 12 operations to find your target
// Runtime for bst: O (log n)
// O (n) for a linkedlist (eg: 4000),
// you may touch them all to get target in a LL. 
// bst can be used to store:
// dictionary, phone, users (if stored by id), etc

function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
}

BST.prototype.contains = function(value){
  if (value === this.value) return true;
  else if (value < this.value){
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value){
    if (!this.right) return false;
    else return this.right.contains(value);
  }
}

// depthFirstTraversal in order method, pre-order and post-order.
// it traverses the whole tree vertically going
// from less to greater 
BST.prototype.depthFirstTraversal = function (processorFunc, order){
  if ( order === 'pre-order') processorFunc(this.value); // parent node
  // on the left child
  if (this.left) this.left.depthFirstTraversal(processorFunc, order); 
  if ( order === 'in-order') processorFunc(this.value); // parent node
  // on the right child
  if (this.right) this.right.depthFirstTraversal(processorFunc, order);
  if ( order === 'post-order') processorFunc(this.value); // parent node
}

BST.prototype.breadthFirstTraversal = function (processorFunc){
  var queue = [this];
  while (queue.length){
    var node = queue.shift();
    processorFunc(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

BST.prototype.getMinValue = function (){
  if (this.left) return this.left.getMinValue();
  else return this.value;
};

BST.prototype.getMaxValue = function (){
  if (this.right) return this.right.getMaxValue();
  else return this.value;
};

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
// console.log(bst.contains(107));
// console.log(bst);
// console.log(bst.right.right.left);
// bst.depthFirstTraversal(printVal, 'in-order');
// bst.depthFirstTraversal(printVal, 'pre-order');
// bst.depthFirstTraversal(printVal, 'post-order');
// function printVal(value){
//   console.log(value)
// }
// bst.breadthFirstTraversal(printVal);
// function printVal(node){
//   console.log(node.value);
// }

console.log('Minimum value: ' , bst.getMinValue());
console.log('Maximum value: ' , bst.getMaxValue());