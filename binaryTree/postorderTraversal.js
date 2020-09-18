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
var postorderTraversal = function(root) {
    return root ? postorderTraversalRecursive(root, []) : []
};

function postorderTraversalRecursive(node, acc) {
    if (!node) return acc

    if (node.left) postorderTraversalRecursive(node.left, acc)
    if (node.right) postorderTraversalRecursive(node.right, acc)
    acc.push(node.val)

    return acc
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(postorderTraversal(new TreeNode(2, new TreeNode(1), new TreeNode(3)))/*?*/, [1,3,2]) //?. $
    expect(postorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))/*?*/, [3,2,1]) //?. $
    expect(postorderTraversal(new TreeNode(1, null, new TreeNode(3, new TreeNode(2))))/*?*/, [2,3,1]) //?. $
    expect(postorderTraversal(new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    ))/*?*/, ['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']) //?. $
}