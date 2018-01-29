var BinarySearchTree = function(value) {
  var leaf = Object.create(BinarySearchTree.prototype)
  leaf.value = value;
  leaf.left = null;
  leaf.right = null;
  return leaf;
};

BinarySearchTree.prototype.insert = function(value){
  var newBST = new BinarySearchTree(value);
  if(this.value > value){
    if(this.left){
      this.left.insert(value);
    } else {
      this.left = newBST;
    }
  }
  if(this.value < value){
    if(this.right){
      this.right.insert(value);
    } else {
      this.right = newBST;
    }
  }
}

BinarySearchTree.prototype.contains = function(){

}

BinarySearchTree.prototype.depthFirstLog = function(){

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
