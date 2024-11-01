/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


*/

/**
 * @param {number} x
 * @return {boolean}
 */
// x: number

var isPalindrome = function (x) {
  x = x.toString();
  let left = 0;
  let right = x.length - 1;

  while (left <= right) {
    if (x[left] !== x[right]) return false;
    left++;
    right--;
  }
  return true;
};

/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.



Example 1:

    1
      \
        2
          \
           3



Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:

Input: root = []
Output: []

     1
   /  \
  2 .  3
  
  [2,1,3]
  
  
             1
          /     \
        2.        3
      /  \       /. \
    4      5 .  6     7
    
    
    [4,2,5,1,6,3,7]

*/

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = [];

  // https://leetcode.com/problems/binary-tree-preorder-traversal/
  // https://leetcode.com/problems/binary-tree-postorder-traversal/
  // https://leetcode.com/problems/binary-tree-inorder-traversal/

  // TO-DO

  // solve postorder, preorder, inorder
  // solve recursively
  // solve iteratively ==> while and stack || BFS

  // preorder - node, left, right
  // inorder - left, node, right
  // postorder - left, right, node

  const dfs = (node) => {
    if (node.left) {
      dfs(node.left);
    }

    arr.push(node);

    if (node.right) {
      dfs(node.right);
    }
  };

  dfs(root);

  return arr;
};

const DFSInorder = (root) => {
  let result = [];
  result.push(root);
  const call = (result, root) => {
    let currentNode = root;
    if (!currentNode) return;
    call(currentNode.left);
    result.push(currentNode.value);
    call(currentNode.right);
  };
  call(result, root);
  return result;
};
