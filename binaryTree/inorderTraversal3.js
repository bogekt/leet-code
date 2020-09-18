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
var inorderTraversal = function(root) {
    if (!root) return []

    const stack = []
    const inorder = []
    let node = root

    while (node || stack.length) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            inorder.push(node.val)
            node = node.right
        }
    }

    return inorder
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(inorderTraversal(new TreeNode(2, new TreeNode(1), new TreeNode(3)))/*?*/, [1,2,3]) //?. $
    expect(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))/*?*/, [1,3,2]) //?. $
    expect(inorderTraversal(new TreeNode(1, null, new TreeNode(3, new TreeNode(2))))/*?*/, [1,2,3]) //?. $
    expect(inorderTraversal(new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    ))/*?*/, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']) //?. $
}