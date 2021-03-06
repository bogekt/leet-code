/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return shuffle(nums) && quickSort(nums, 0, nums.length - 1)
};

function shuffle(array) {
    for (let i = 0; i < array.length; i++) 
        swap(array, i, Math.floor(Math.random()*i))
    return array
}

function quickSort(array, lo, hi) {
    if (lo >= hi) return array

    const mid = partition(array, lo, hi)
    quickSort(array, lo, mid - 1)
    quickSort(array, mid + 1, hi)

    return array
}

function partition(array, lo, hi) {
    const pivot = lo
    let i = lo
    let j = hi + 1

    while (true) {
        while (array[++i] < array[pivot])
            if (i === hi) break
        while (array[--j] > array[pivot])
            if (j === lo) break
        if (i >= j) break
        swap(array, i, j)
    }

    return swap(array, pivot, j), j
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    let a
    expect(partition(a = [1,3,2], 0, 2), 0) && expect(a, [1,3,2]) //?. $
    expect(partition(a = [1,3,2], 1, 2), 2) && expect(a, [1,2,3]) //?. $
    expect(sortArray([1, 3, 2]), [1, 2, 3]) //?. $
    expect(sortArray([5,2,3,1]), [1,2,3,5]) //?. $
    expect(sortArray([5,1,1,2,0,0]), [0,0,1,1,2,5]) //?.
    expect(
        sortArray([-74,48,-20,2,10,-84,-5,-9,11,-24,-91,2,-71,64,63,80,28,-30,-58,-11,-44,-87,-22,54,-74,-10,-55,-28,-46,29,10,50,-72,34,26,25,8,51,13,30,35,-8,50,65,-6,16,-2,21,-78,35,-13,14,23,-3,26,-90,86,25,-56,91,-13,92,-25,37,57,-20,-69,98,95,45,47,29,86,-28,73,-44,-46,65,-84,-96,-24,-12,72,-68,93,57,92,52,-45,-2,85,-63,56,55,12,-85,77,-39]), 
        [-96,-91,-90,-87,-85,-84,-84,-78,-74,-74,-72,-71,-69,-68,-63,-58,-56,-55,-46,-46,-45,-44,-44,-39,-30,-28,-28,-25,-24,-24,-22,-20,-20,-13,-13,-12,-11,-10,-9,-8,-6,-5,-3,-2,-2,2,2,8,10,10,11,12,13,14,16,21,23,25,25,26,26,28,29,29,30,34,35,35,37,45,47,48,50,50,51,52,54,55,56,57,57,63,64,65,65,72,73,77,80,85,86,86,91,92,92,93,95,98]
    ) //?. $
}