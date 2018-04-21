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
BST.prototype.depthFirstTraversal = function (verticalTravers, order){
  if ( order === 'pre-order') verticalTravers(this.value); // parent node
  // on the left child
  if (this.left) this.left.depthFirstTraversal(verticalTravers, order); 
  if ( order === 'in-order') verticalTravers(this.value); // parent node
  // on the right child
  if (this.right) this.right.depthFirstTraversal(verticalTravers, order);
}

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
bst.depthFirstTraversal(printVal, 'pre-order');
function printVal(value){
  console.log(value)
}