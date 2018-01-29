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

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value){
    return true;
  }

  if(value > this.value && this.right){
    return this.right.contains(value);
  }

  if(value < this.value && this.left){
    return this.left.contains(value);
  }

  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);

  if(this.left){
    this.left.depthFirstLog(cb);
  }

  if(this.right){
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
