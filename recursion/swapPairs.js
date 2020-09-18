/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    return head && swapPairsRecursive(head)
};

function swapPairsRecursive(head) {
    if (!head || !head.next) return head

    const next = head.next
    head.next = swapPairsRecursive(next.next)
    next.next = head

    return next
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function toListNode(array) {
    let node = new ListNode(array[array.length - 1])
    let i = array.length - 1
    while (i--)
        node = new ListNode(array[i], node)
    return node
}

function toArray(head) {
    const array = []
    while (head)
        array.push(head.val), head = head.next
    return array
}


const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(toArray(toListNode([1,2,3,4])/*?*/)/*?*/, [1,2,3,4]) //?. $
    expect(toArray(swapPairs(toListNode([1,2])/*?*/)), [2,1]) //?. $
    expect(toArray(swapPairs(toListNode([1,2,3,4])/*?*/)), [2,1,4,3]) //?. $
    expect(toArray(swapPairs(toListNode([1,2,3,4,5,])/*?*/)), [2,1,4,3,5]) //?. $
}