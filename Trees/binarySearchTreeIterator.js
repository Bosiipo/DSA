/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.inOrder(root);
  }

  inOrder(node) {
    if (!node) return;
    this.inOrder(node.left);
    this.stack.push(node.val);
    this.inOrder(node.right);
  }

  next() {
    if (this.hasNext) {
      return this.stack.shift();
    }
  }

  hasNext() {
    return this.stack.length > 0 ? true : false;
  }
}
