export default function binarySearch(array, value) {
    if (!array || !array.length) return -1
    if (array.length === 1) return array[0] === value ? 0 : -1

    let left = 0
    let right = array.length - 1

    while (left < right) {
        let mid = left + Math.round((right - left)/2)
        if (array[mid] < value)
            left = mid + 1
        else if (array[mid] > value)
            right = mid - 1
        else
            return mid
    }

    return array[left] === value ? left : -1
}

const test = false
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(binarySearch()/*?*/, -1) //?. $
    expect(binarySearch([])/*?*/, -1) 
    expect(binarySearch([1], 1)/*?*/, 0) //?. $
    expect(binarySearch([1], 2)/*?*/, -1) //?. $
    expect(binarySearch([1,2,3,4], 1)/*?*/, 0) //?. $
    expect(binarySearch([1,2,3,4], 4)/*?*/, 3) //?. $
    expect(binarySearch([1,2,3,4], 3)/*?*/, 2) //?. $
    expect(binarySearch([1,2,3,4], 6)/*?*/, -1) //?. $
    expect(binarySearch([1,2,3,4,5], 1)/*?*/, 0) //?. $
    expect(binarySearch([1,2,3,4,5], 5)/*?*/, 4) //?. $
    expect(binarySearch([1,2,3,4,5], 2)/*?*/, 1) //?. $
    expect(binarySearch([1,2,3,4,5], 3)/*?*/, 2) //?. $
    expect(binarySearch([1,2,3,4,5], 6)/*?*/, -1) //?. $
}