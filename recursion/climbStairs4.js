/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo, callStack) {
    callStack && callStack.value++
    if (n === 1) return 1
    if (n === 2) return 2
    if ((memo = memo || {})[n]) return memo[n]

    return memo[n] = climbStairs(n - 1, memo, callStack) + climbStairs(n - 2, memo, callStack)
};
//                                          
//                      5                   
//                ____/   \____             
//           4 + 1             3 + 2        
//           /   \             /   \        
//      3 + 1     2 + 2   2 + 1      1 + 2  
//      /  \     = 2     = 2        = 1    
// 2 + 1     1 + 2                          
// = 2       = 1                            
//                                          

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(climbStairs(2)/*?*/, 2) //?. $
    expect(climbStairs(3)/*?*/, 3) //?. $
    expect(climbStairs(4)/*?*/, 5) //?. $
    expect(climbStairs(5)/*?*/, 8) //?. $
    expect(climbStairs(6)/*?*/, 13) //?. $
    expect(climbStairs(7)/*?*/, 21) //?. $
    const callStack = { value: 0 };
    memory(() => expect(!!climbStairs(10, null, callStack)/*?*/, true), true) //?. $
    console.log(callStack.value)
}
