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
var isSymmetric = function(root) {
    return !root ? true : isSymetricRecursive(root.left, root.right);
};

function isSymetricRecursive(l, r) {
    if (!l || !r) return !l && !r
    return l.val === r.val 
        && isSymetricRecursive(l.left, r.right) 
        && isSymetricRecursive(l.right, r.left)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(isSymmetric(new TreeNode(2, new TreeNode(1), new TreeNode(3)))/*?*/, false) //?. $
    expect(isSymmetric(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))/*?*/, false) //?. $
    expect(isSymmetric(new TreeNode(1, null, new TreeNode(3, new TreeNode(2))))/*?*/, false) //?. $
    expect(isSymmetric(new TreeNode(
        'F',
        new TreeNode('B', new TreeNode('A'), new TreeNode('D', new TreeNode('C'), new TreeNode('E'))),
        new TreeNode('G', null, new TreeNode('I', new TreeNode('H'))),
    ))/*?*/, false) //?. $
    expect(isSymmetric(new TreeNode(
        '1',
        new TreeNode('2', new TreeNode('3'), new TreeNode('4')),
        new TreeNode('2', new TreeNode('4'), new TreeNode('3')),
    ))/*?*/, true) //?. $
    expect(isSymmetric(new TreeNode(
        '1',
        new TreeNode('2', new TreeNode('3'), null),
        new TreeNode('2', null, new TreeNode('3')),
    ))/*?*/, true) //?. $
    expect(isSymmetric(new TreeNode(
        '1',
        new TreeNode('2', null,  new TreeNode('3')),
        new TreeNode('2', null, new TreeNode('3')),
    ))/*?*/, false) //?. $
}