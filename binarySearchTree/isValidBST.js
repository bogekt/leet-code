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
    return isValidBSTRecursive(root, null, null, 0, 0)
};

function isValidBSTRecursive(array, min, max, index, level) {
    if (!(index in array) || array[index] === null) return true
    if (min && array[index] < min) return false
    if (max && array[index] > max) return false
    return isValidBSTRecursive(array, min, array[index], leftIndex(index, level), level + 1)
        && isValidBSTRecursive(array, array[index], max, rightIndex(index, level), level + 1)
};

function leftIndex(rootIndex, rootLevel) {
    if (!rootLevel) return 1;
    return 1 + offset(rootIndex, rootLevel)
}

function rightIndex(rootIndex, rootLevel) {
    if (!rootLevel) return 2
    return 2 + offset(rootIndex, rootLevel)
}

function offset(rootIndex, rootLevel) {
    return 2**(rootLevel) + 2*(rootIndex - rootLevel);
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    const test = [0,1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16]
    expect(test[leftIndex(0, 0)], 1)
    expect(test[rightIndex(0, 0)], 2)
    expect(test[leftIndex(1, 1)], 3)
    expect(test[leftIndex(2, 1)], 5)
    expect(test[rightIndex(1, 1)], 4)
    expect(test[rightIndex(2, 1)], 6)
    expect(test[leftIndex(3, 2)], 7)
    expect(test[leftIndex(4, 2)], 9)
    expect(test[leftIndex(5, 2)], 11)
    expect(test[leftIndex(6, 2)], 13)
    expect(test[rightIndex(3, 2)], 8)
    expect(test[rightIndex(4, 2)], 10)
    expect(test[rightIndex(5, 2)], 12)
    expect(test[rightIndex(6, 2)], 14)
    expect(isValidBST([2,1,3])/*?*/, true) //?. $
    expect(isValidBST([5,1,4,null,null,3,6])/*?*/, false) //?. $
    expect(isValidBST(test)/*?*/, false) //?. $
    expect(isValidBST([2,1,3,5,4])/*?*/, false) //?. $
    expect(isValidBST([5,2,7,1,4])/*?*/, true) //?. $
    expect(isValidBST([5,2,7,1,6])/*?*/, false) //?. $
}