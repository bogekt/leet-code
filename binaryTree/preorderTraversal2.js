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
var preorderTraversal = function(root) {
    if (!root) return []

    const stack = [root]
    const preOrder = []

    while (stack.length) {
        const node = stack.pop()
        preOrder.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }

    return preOrder
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))/*?*/, [1,2,3]) //?. $
    expect(preorderTraversal(new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    ))/*?*/, ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']) //?. $
}