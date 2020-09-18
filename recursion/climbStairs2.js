/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 1;
    const scale = [1]
    const nc = [1, n - 1]
    for (let k = 1; k <= Math.trunc(n/2); k++)
        scale[k] = scale[k-1] * (n - 2*k)*(n - 2*k - 1)/((k + 1)*(n - k))
        ,
        nc.push(nc[k]*scale[k])
    console.log(scale)
    console.log(nc)
    return result
};

// NC0 = n!/(n!)
// NC1 = (n - 1)!/(n - 2*1)!*1!
// NC2 = (n - 2)!/(n - 2*2)!*2!
// ...
// NCk = (n - k)!/((n - 2*k)!*k!)
// NCk+1 = (n - (k + 1))!/((n - 2*(k + 1))!*(k + 1)!)
//
//                  (n - k)!       (n - 2*(k + 1))! * (k + 1)!
// NCk/NCk+1 = ----------------- * --------------------------- =
//             (n - 2 * k)! * k!         (n - (k + 1))!
//
// NCk+1/NCk = 1/NCk/NCk+1 = https://www.wolframalpha.com/input/?i=%28%28n+-+%28k+%2B+1%29%29%21%2F%28%28n+-+2*%28k+%2B+1%29%29%21*%28k+%2B+1%29%21%29%29%2F%28%28n+-+k%29%21%2F%28%28n+-+2*k%29%21*k%21%29%29
//
//             (n - 2*k)*(n - 2*k - 1)
// NCk+1/NCk = -----------------------
//                 (k + 1)*(n - k)

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(climbStairs(2)/*?*/, 2) //?. $
    expect(climbStairs(3)/*?*/, 3) //?. $
    expect(climbStairs(4)/*?*/, 5) //?. $
    expect(climbStairs(5)/*?*/, 8) //?. $
    expect(climbStairs(6)/*?*/, 13) //?. $
    expect(climbStairs(7)/*?*/, 21) //?. $
    memory(() => expect(!!climbStairs(45)/*?*/, true), true) //?. $
}