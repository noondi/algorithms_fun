function LinkedList(){
    this.head = null;
}
// function Node(value, next){
//     this.value = value;
//     this.next = next;
// }
LinkedList.prototype.isEmpty = function(){
   return this.head === null;
}
LinkedList.prototype.size = function(){
  var current = this.head;
  var count = 0;
  
  while (current !== null){
    count++;
    current = current.next;
  }
  return count;
}

LinkedList.prototype.addToHead = function(val){
  var newNode = {data: val, next: this.head};
  this.head = newNode;
}


// 1. Create a new node using val
// 2. Traverse to the end of the list
// 3. Make the last node's next value point to the new node
LinkedList.prototype.addToEnd = function(val){
    var newNode = {data: val, next: null};
    if(this.isEmpty()){
        this.head = newNode;
        return;
    }
    var current = this.head;
    while (current.next !== null){
        current = current.next;
    }
    current.next = newNode;
}

LinkedList.prototype.contains = function(val){
    var current = this.head;

    while (current !== null){
        if (current.val === val){
            return true;
        }
        current = current.next;
    }
    return false;
}

LinkedList.prototype.remove = function(val){
    // if value not present
    if (!this.contains(val)) {
        return;
    }
    // if head has value then target is head
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }
    // otherwise we need to initiate two runners
    // a previous and a current
    var prev = null;
    var curr = this.head;

    while (curr.data !== val) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
}

LinkedList.prototype.print = function(){
    var output = '[';
    var current = this.head;

    while (current !== null) {
        output += current.data;
        if (current.next !== null){
            output += ',';
        }
        // this line helps us move to the next
        // otherwise we can keep doing that, and ending in infinite loop
        current = current.next;
    }
    output += ']';
    console.log(output);
}

var LL = new LinkedList();
LL.addToHead(10);
LL.addToHead(20);
LL.addToHead(30);
LL.addToEnd(40);
LL.addToEnd(50);
console.log(LL);
LL.print();
// console.log(LL.size());
// console.log(LL.isEmpty());