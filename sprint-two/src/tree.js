var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }

  //loop through the children and recursively call each tree child to see if it has
  //the target value

  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
