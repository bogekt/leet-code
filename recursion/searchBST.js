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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return searchBSTRecursive(root, val)
};

function searchBSTRecursive(node, val) {
    if (!node || node.val === val) return node
    return searchBSTRecursive(val < node.val ? node.left : node.right, val)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    const bst = new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    );
    expect(!!searchBST(bst, 'A'), true); //?. $
    expect(!!searchBST(bst, 'L'), false); //?. $
    expect(!!searchBST(bst, 'H'), true); //?. $
}