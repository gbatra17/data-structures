var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //big-o = constant
    var newNode = new Node(value);

    //if there is no head
    if(list.head === null){
      list.head = newNode;
    }

    if(list.tail){
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    //big-0 = constant
    var oldHead = list.head.value;

    list.head = list.head.next;

    return oldHead;
  };

  list.contains = function(target) {
    //big-o = linear
    var node = list.head;

    while(node){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }

    return false;
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
