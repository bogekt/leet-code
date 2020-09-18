/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n

    let [ q11, q12/* same as q21*/, q22] = [ 1, 1, 0 ]

    for (const x of n.toString(2).slice(1)) {
        const q12pow2 = q12*q12
        ;([ q11, q12, q22 ] = [
            q11*q11 + q12pow2, 
            q12*(q11 + q22), 
            q12pow2 + q22*q22,
        ])
        x === '1' && ([ q11, q12, q22 ] = [ 
            q11 + q12, 
            q11,
            q12,
        ])
    }

    return q12
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(fib(0)/*?*/, 0) //?. $
    expect(fib(1)/*?*/, 1) //?. $
    expect(fib(2)/*?*/, 1) //?. $
    expect(fib(3)/*?*/, 2) //?. $
    expect(fib(4)/*?*/, 3) //?. $
    expect(fib(5)/*?*/, 5) //?. $
    expect(fib(6)/*?*/, 8) //?. $
    expect(fib(7)/*?*/, 13) //?. $
    expect(fib(8)/*?*/, 21) //?. $
    memory(() => expect(!!fib(45)/*?*/, true), true) //?. $
}