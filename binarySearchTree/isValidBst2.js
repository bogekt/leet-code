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
var isValidBST = function(root) {
    if (!root) return true
    return isValidBSTRecursive(root, null, null)
};

function isValidBSTRecursive(node, min, max) {
    if (!node) return true
    if (min !== null && node.val <= min) return false
    if (max !== null && node.val >= max) return false
    return isValidBSTRecursive(node.left, min, node.val)
        && isValidBSTRecursive(node.right, node.val, max)
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)))/*?*/, true) //?. $
    expect(isValidBST(new TreeNode(
        5,
        new TreeNode(2, new TreeNode(1), new TreeNode(4)),
        new TreeNode(7),
    ))/*?*/, true) //?. $
    expect(isValidBST(new TreeNode(
        5,
        new TreeNode(2, new TreeNode(1), new TreeNode(6)),
        new TreeNode(7),
    ))/*?*/, false) //?. $
    expect(isValidBST(new TreeNode(1, new TreeNode(1)))/*?*/, false) //?. $
    expect(isValidBST(new TreeNode(0, null, new TreeNode(-1)))/*?*/, false) //?. $
}