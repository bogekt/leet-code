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

    const stack = [root]
    const inorder = []
    let node = root

    // flatten call stack from recursive variant
    /*     
    function inorderTraversalRecursive(node, acc) {
        if (!node) return acc
    
        if (node.left) inorderTraversalRecursive(node.left, acc)
        acc.push(node.val)
        if (node.right) inorderTraversalRecursive(node.right, acc)
    
        return acc
    }
    */
    while (stack.length) {
        node = stack.pop() // pop from "call stack"
        if (node.left) { // if we have left
            stack.push(node, 'skip') // save current "call stack" and an exectuion mark (executed previous part)
            stack.push(node.left) // push left to "call stack" for observe left nodes first
            continue; // go to "call stack"
        } else if (node === 'skip') { // check for an execution mark - it means that there is no observed left nodes elements left
            node = stack.pop() // restore old "call stack" with alredy skipped previous part
        }
        inorder.push(node.val) // add next element (initially the most left or root)
        if (node.right) stack.push(node.right) // if we have right node add it "call stack" for observe
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