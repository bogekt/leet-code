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

    const inorder = []
    let node = root

    while (node) {
        if (!node.left) {
            inorder.push(node.val) // push leftest node
            node = node.right // go to threaded node
            continue
        }
        // find most rightest node in left subtree or threaded node
        let predecessor = node.left
        while (predecessor.right && predecessor.right !== node) 
            predecessor = predecessor.right
        // check if not threaded node
        if (!predecessor.right) {
            predecessor.right = node
            node = node.left
        } else { // threaded node
            predecessor.right === null // destroy threaded node
            inorder.push(node.val) // push successor (parent) node
            node = node.right // observe successor (parent) right subtree
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