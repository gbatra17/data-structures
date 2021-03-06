describe('tree', function() {
  var tree;

  beforeEach(function() {
    //tree is a constructor and should begin with a new keyword
    tree = new Tree();
  });

  it('should have methods named "addChild", "contains", "removeFromParent", and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
    expect(tree.children[0].hasOwnProperty('parent')).to.equal(true);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect parent nodes', function(){
    tree.addChild(5);
    expect(tree.children[0].parent.children[0].value).to.equal(5);
  })

  it('should correctly remove parent nodes', function(){
    var child = tree.addChild(5);
    child.removeFromParent();
    expect(tree.children).to.be.empty;
  })

  it('should correctly traverse the tree', function(){
    var child1 = tree.addChild(5);
    tree.children[0].addChild(6);
    child1.traverse((node) => node + 1);
    expect(child1.value).to.equal(6);
    expect(child1.children[0].value).to.equal(7);
  })
});
