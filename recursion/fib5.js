/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n){
    const fib = [0, 1, 1]

    for(let i = 3; i <= n; i++)
        fib[i] = fib[i-1] + fib[i-2], delete fib[i - 2]

    return fib[n]
}

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