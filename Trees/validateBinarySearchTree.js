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
 * @return {boolean}
 */

const isValidBST = function (root) {
  let stack = [];
  const arrange = (node) => {
    if (!node) return;
    arrange(node.left);
    stack.push(node.val);
    arrange(node.right);
  };
  arrange(root);
  let i = 0;

  while (i < stack.length) {
    if (stack[i] >= stack[i + 1]) {
      return false;
    }
    i++;
  }

  return true;
};
