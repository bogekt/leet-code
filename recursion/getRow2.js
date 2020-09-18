/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const f = [[1]]
    
    for (let i = 2; i <= rowIndex + 1; i++) {
        if (!f[i- 1]) f[i - 1] = []
        for (let j = 1; j <= i; j++)
            f[i - 1][j - 1] = f2(i , j, f)
        delete f[i - 2]
    }

    return f[f.length - 1]
};
// row[0] = f(1,1) = 1, base
// row[0] = f(2,1) = 1, j = 1
// row[1] = f(2,2) = 1, i = j
// ...
// row[0] = f(3,1) = 1, j = 1
// row[1] = f(3,2) = 2 = f(2,1) + f(2,2)
// row[2] = f(3,3) = 1, i = j
// ... 
// row[1] = f(4,2) = 3 = f(3,1) + f(3,2)
// ...
// row[j - 1] = f[i - 1][j - 1] + f[i - 1][j], i != j && j != 1
function f2(i, j, f) {
    if (j === 1 || i === j) return 1
    i--, j-- // convert to zero based indexes
    return f[i - 1][j - 1] + f[i - 1][j]
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(f2(1,1), 1) //?. $
    expect(f2(2,1), 1) //?. $
    expect(f2(2,2), 1) //?. $
    expect(f2(3,1), 1) //?. $
    expect(f2(3,2,[[1],[1,1]]), 2) //?. $
    expect(f2(3,3), 1) //?. $
    expect(f2(4,3,[[1],[1,1],[1,2,1]]), 3) //?. $
    expect(f2(4,2,[[1],[1,1],[1,2,1]]), 3) 
    expect(f2(5,3,[[1],[1,1],[1,2,1],[1,3,3,1]]), 6) //?. $
    expect(f2(5,3,[,,,[1,3,3,1]]), 6) //?. $

    expect(getRow(3)/*?*/, [1,3,3,1])
    expect(getRow(4)/*?*/, [1,4,6,4,1])
    memory(() => expect(!!getRow(30)/*?*/, true), true) //?. $
}