var BinarySearchTree = function(value) {
  var leaf = Object.create(BinarySearchTree.prototype)
  leaf.value = value;
  leaf.left = null;
  leaf.right = null;
  return leaf;
};

BinarySearchTree.prototype.insert = function(value) {
  var newBST = new BinarySearchTree(value);
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = newBST;
    }
  }
  if (this.value < value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = newBST;
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  if (value > this.value && this.right) {
    return this.right.contains(value);
  }

  if (value < this.value && this.left) {
    return this.left.contains(value);
  }

  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  //start with the current rootnode
  var queue = [this];
  while (queue.length) {
    //take the first node and put it in a queue
    var treeNode = queue.shift();
    //callback on the node's value
    cb(treeNode.value);

    //if it has a left node, push it to the queue
    if (treeNode.left) {
      queue.push(treeNode.left)
    }
    //if it has a right node, push it to the queue
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
    //function will run by level-order since each time we push left and right node, and then
    //shift to use first and queue up it's children
  }

}
//O(n) for all funcs
