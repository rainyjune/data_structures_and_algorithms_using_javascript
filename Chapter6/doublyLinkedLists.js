function Node(element) {
  this.element = element;
  this.previous = null;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  var nextNode = current.next;
  
  if(nextNode) {
    nextNode.previous = newNode;
  }
  
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode; 
}

function display() {
  var currNode = this.head;
  while(currNode.next != null) {
    console.log("Current:", currNode.next.element, " previous:", currNode.next.previous, " next:", currNode.next.next);
    currNode = currNode.next;
  }
}

