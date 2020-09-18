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
 * @return {number}
 */
var maxDepth = function(root, ) {
    return maxDepthRecursive(root, 0)
};

function maxDepthRecursive(node, depth) {
    return !node ? depth : Math.max(
        maxDepthRecursive(node.left, depth + 1),
        maxDepthRecursive(node.right, depth + 1),
    )
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(maxDepth(new TreeNode(2, new TreeNode(1), new TreeNode(3)))/*?*/, 2) //?. $
    expect(maxDepth(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))/*?*/, 3) //?. $
    expect(maxDepth(new TreeNode(1, null, new TreeNode(3, new TreeNode(2))))/*?*/, 3) //?. $
    expect(maxDepth(new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    ))/*?*/, 4) //?. $
}