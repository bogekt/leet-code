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
    if (!head || !head.next) return head

    const stack = [head]
    const newHead = head.next

    while (stack.length) {
        const current = stack.pop()
        if (current !== 'next') {
            if (!current || !current.next) {
                stack.push(current, 'next') 
                continue;
            }
            stack.push(current, current.next.next)
        } else {
            const result = stack.pop()
            if (!stack.length)
                break;
            const current = stack.pop()
            const next = current.next
            current.next = result
            next.next = current
            stack.push(next, 'next')
        }
    }

    return newHead
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
    if (!array.length) return null
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
    expect(toArray(swapPairs(toListNode([])/*?*/)), []) //?. $
    expect(toArray(swapPairs(toListNode([1])/*?*/)), [1]) //?. $
    expect(toArray(swapPairs(toListNode([1,2])/*?*/)), [2,1]) //?. $
    expect(toArray(swapPairs(toListNode([1,2,3,4])/*?*/)), [2,1,4,3]) //?. $
    expect(toArray(swapPairs(toListNode([1,2,3,4,5])/*?*/)), [2,1,4,3,5]) //?. $
}