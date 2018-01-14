var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    //if there is no head
    if(list.head === null){
      list.head = newNode;
    }

    if(list.head){
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    var oldHead = list.head.value;

    list.head = list.head.next;

    return oldHead;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
