function extend(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
}

var Tree = function(value) {
  var newTree = {};
  newTree.parent = null;
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
  return newChild;
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

treeMethods.removeFromParent = function(){
  //first find the child value then splice it out from the parents array
  var parent = this.parent;
  for(var i = 0; i < parent.children.length; i++){
    if(parent.children[i].value === this.value){
      parent.children.splice(i, 1);
    }
  }
  this.parent = null;
}
