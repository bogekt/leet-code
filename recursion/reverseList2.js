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
var reverseList = function(head) {
    return head && reverseListRecursive(head)
};

function reverseListRecursive(head) {
    // find new head (head.next === null)
    if (!head || !head.next) return head
    const newHead = reverseListRecursive(head.next)
    // then set head next link (next.next) to head
    // a -> b -> ... => a <-> b
    head.next.next = head
    // break head link to next
    // a <-> b => a <- b
    head.next = null
    // return found new head
    return newHead
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
    expect(toArray(reverseList(toListNode([1,2])/*?*/)), [2,1]) //?. $
    expect(toArray(reverseList(toListNode([1,2,3,4])/*?*/)), [4,3,2,1]) //?. $
    expect(toArray(reverseList(toListNode([1,2,3,4,5,])/*?*/)), [5,4,3,2,1]) //?. $
}