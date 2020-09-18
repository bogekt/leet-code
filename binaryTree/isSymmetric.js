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
    if (!root) return true

    let stack = [root]

    while (stack.length) {
        let i = 0
        let j = stack.length - 1
        while (i < j) {
            const l = stack[i]
            const r = stack[j]
            if (!l && r || l && !r) return false
            if (l && r && l.val !== r.val) 
                return false
            i++, j--
        }
        const nextLevelStack = []
        for (const node of stack) {
            node && nextLevelStack.push(node.left)
            node && nextLevelStack.push(node.right)
        }
        if (
            nextLevelStack.length
            &&
            nextLevelStack.length < stack.length || nextLevelStack.length%2
        ) return false
        stack = nextLevelStack
    }

    return true;
};

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