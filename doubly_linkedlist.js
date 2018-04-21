function LinkedList(){
  this.head = null;
  this.tail = null;
}
// my Node constructor
function Node (value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}
// adding a node to head
LinkedList.prototype.addToHead = function(value){
  // this.head becomes the head of the new added node
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}
// adding a node to tail
LinkedList.prototype.addToTail = function(value){
  // pass the current tail node as the previous 
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  // since it is the only node in the list it will be both
  // the head and the tail
  else this.head = newNode;
  this.tail = newNode;
}

// removehead function
LinkedList.prototype.removeHead = function(){
  // what if there was no node
  if(!this.head) {
    return null;
  }
  // save the val of the value node in a variable if there is 
  var val = this.head.value;
  // reposition pointer and remove the current head
  this.head = this.head.next;
  //if there is a head present then set it to null
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function(){
  // check if the linkedlist was empty
  if (!this.tail) return null;
  // save its value if there was an existing one
  var val = this.tail.value;
  // then reposition the pointer to the next tail
  this.tail= this.tail.next;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

// search method
LinkedList.prototype.search = function(searchedValue){
var currentNode = this.head;
  while (currentNode){
	if (currentNode.val === searchedValue) return currentNode.val;
		currentNode = currentNode.next;
	}
	return null;
};

var ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead("Hello");
// ll.addToHead(20);
// ll.addToTail(3000);
// ll.add.ToTail("World")
// ll.addToTail(75);
// ll.removeHead();
// ll.removeTail();
// console.log(ll.removeHead());
// console.log(ll.removeTail());
// ll.search("Hello");
// ll.search(7);
// console.log(ll.search);
console.log(ll);




