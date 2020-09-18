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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    const stack = [root, 0]
    const queue = []

    while (stack.length) {
        const level = stack.pop()
        const node = stack.pop()
        if (!node) continue
        queue[level] = queue[level] || []
        queue[level].push(node.val)
        stack.push(node.right, level + 1)
        stack.push(node.left, level + 1)
    }

    return queue;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(levelOrder(new TreeNode(2, new TreeNode(1), new TreeNode(3)))/*?*/, [[2],[1,3]]) //?. $
    expect(levelOrder(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))/*?*/, [[1],[2],[3]]) //?. $
    expect(levelOrder(new TreeNode(1, null, new TreeNode(3, new TreeNode(2))))/*?*/, [[1],[3],[2]]) //?. $
    expect(levelOrder(new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    ))/*?*/, [['F'], ['B', 'G'], ['A', 'D', 'I'], ['C', 'E', 'H']]) //?. $
}