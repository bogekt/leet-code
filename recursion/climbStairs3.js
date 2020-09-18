/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, callStack) {
    callStack && callStack.value++
    if (n === 1) return 1
    if (n === 2) return 2

    return climbStairs(n - 1, callStack) + climbStairs(n - 2, callStack)
};
//                                          
//                      5                   
//                ____/   \____             
//           4 + 1             3 + 2        
//           /   \             /   \        
//      3 + 1     2 + 2   2 + 1      1 + 2  
//      /   \     = 2     = 2        = 1    
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
    memory(() => expect(!!climbStairs(10, callStack)/*?*/, true), true) //?. $
    console.log(callStack.value)
    //memory(() => expect(!!climbStairs(45)/*?*/, true), true) //?. $
}
