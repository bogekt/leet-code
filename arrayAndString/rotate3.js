
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k, debug) {
    if (!nums || !nums.length) return nums
    if (nums.length === 1 || !k) return nums
    if (k >= nums.length && k % nums.length === 0) return nums

    k %= nums.length
    let n = nums.length
    let m = n%k
    debug && console.log(`n=${n}, m=${m}, k=${k}`)

    do {
        for (let i = 0; i < k; i++) {
            let temp = nums[i]
            let j = i

            while (j + k < n) {
                let temp2 = nums[j + k]
                nums[j + k] = temp
                temp = temp2
                j += k
                debug && console.log(`i=${i}, j=${j}, temp=${temp}, temp2=${temp2}, nums=[${nums}]`)
            }

            nums[i] = temp
            debug && console.log(`i=${i}, j=${j}, temp=${temp}, (j+k)%${n}=${(j+k)%n}, nums=[${nums}]`)
        }

        if (m === 0) break

        n = k
        k -= m
        m = n%k
        debug && console.log(`n=${n}, m=${m}, k=${k}, nums=[${nums}]`)
    } while (m >= 0)

    return nums
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(rotate([1,2], 3)/*?*/,[2,1]) //?. $
    expect(rotate([1,2,3], 1)/*?*/, [3,1,2]) //?. $
    expect(rotate([1,2,3], 2, 1)/*?*/, [2,3,1]) //?. $
    expect(rotate([1,2,3], 3)/*?*/, [1,2,3]) //?. $
    expect(rotate([1,2,3,4,5,6,7], 3, 1)/*?*/, [5,6,7,1,2,3,4]) //?. $
    expect(rotate([-1,-100,3,99], 2)/*?*/, [3,99,-1,-100]) //?. $

    expect(rotate([1,2,3,4,5,6,7,8,9,0], 0, 1)/*?*/, [1,2,3,4,5,6,7,8,9,0]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 1, 1)/*?*/, [0,1,2,3,4,5,6,7,8,9]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 2, 1)/*?*/, [9,0,1,2,3,4,5,6,7,8]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 3, 1)/*?*/, [8,9,0,1,2,3,4,5,6,7]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 4, 1)/*?*/, [7,8,9,0,1,2,3,4,5,6]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 5, 1)/*?*/, [6,7,8,9,0,1,2,3,4,5]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 6, 1)/*?*/, [5,6,7,8,9,0,1,2,3,4]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 7, 1)/*?*/, [4,5,6,7,8,9,0,1,2,3]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 8, 1)/*?*/, [3,4,5,6,7,8,9,0,1,2]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 9, 1)/*?*/, [2,3,4,5,6,7,8,9,0,1]) //?. $
    expect(rotate([1,2,3,4,5,6], 11, 1)/*?*/, [2,3,4,5,6,1]) //?. $
}
