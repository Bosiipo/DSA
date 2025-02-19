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
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (value > currentNode.value) {
            //Right
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        console.log(currentNode);
        return currentNode;
      }
    }
    console.log(false);
    return false;
  }

  // remove(value){
  //     if (!this.root) {
  //         return false;
  //     }
  //     let currentNode = this.root;
  //     let parentNode = null;
  //     while (currentNode) {
  //         if (value < currentNode.value) {
  //             parentNode = currentNode;
  //             currentNode = currentNode.left;
  //         } else if (value > currentNode.value) {
  //             parentNode = currentNode;
  //             currentNode = currentNode.right;
  //         }
  //         // We have a match, get to work

  //         // Option 1: No right child:

  //     }
  // }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(170);

console.log('tree ==>', tree);
