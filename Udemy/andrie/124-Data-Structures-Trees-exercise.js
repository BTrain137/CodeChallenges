class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } 
    else {
      let tempNode = this.root;
      let isInserted = false;
      while(!isInserted) {
        if (tempNode.value > newNode.value) {
          if(tempNode.left !== null) {
            tempNode = tempNode.left
          }
          else {
            tempNode.left = newNode;
            isInserted = true;
            return;
          }
        }
        else if (tempNode.value < newNode.value) {
          if(tempNode.right !== null) {
            tempNode = tempNode.right
          }
          else {
            tempNode.right = newNode;
            isInserted = true;
            return;
          }
        }
      }
    }
  }
  lookup(value) {
    let isFound = false;
    let tempNode = this.root;
    while(!isFound) {
      if(!tempNode) {
        isFound = true;
        return null;
      }
      else if (tempNode.value === value) {
        isFound = true;
        return tempNode;
      }
      else if (tempNode.value > value) {
        tempNode = tempNode.left;
      }
      else if(tempNode.value < value) {
        tempNode = tempNode.right;
      }
    }
  }
  remove() {
    this.root = null;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.parse(JSON.stringify(traverse(tree.root))));
console.log(tree.lookup(170));
console.log(tree.lookup(20));


//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
