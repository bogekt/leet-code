/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (!numRows) return []
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [
        [1],
        [1, 1],
    ]
    
    const pascalTriangle = [
        [1],
        [1, 1],
    ]

    for (let i = 2; i < numRows; i++) {
        // as row is symmetric, the algorithm, we use:
        // * fill left part
        // * for odd length push in the middle dobled prev middle value
        // * symmetric copy left part as right
        const row = [1]
        const prevRow = pascalTriangle[i - 1]
        let j = 1
        // fill left part, skipping first 1
        while (j < Math.round(i / 2))
            row.push(prevRow[j - 1] + prevRow[j++])
        // for odd length push in the middle dobled prev middle value
        if (!(i % 2)) row.push(prevRow[j - 1] * 2)
        // symmetric copy left part as right
        while (j)
            row.push(row[--j])
        // add result row
        pascalTriangle.push(row)
    }

    return pascalTriangle
};

console.log(1 % 2)
console.log(4 % 2)
console.log(generate(0))
console.log(generate(1))
console.log(generate(2))
console.log(generate(3))
console.log(generate(4))
console.log(generate(5))
console.log(generate(6))
console.log(generate(7))
console.log(generate(8))
console.log(generate(9))