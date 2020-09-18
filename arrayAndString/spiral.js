function spiral(matrix, debug) {
    if (!matrix || !matrix.length) return [];
    if (matrix.length == 1) return matrix[0];
    if (matrix[0].length == 1) return matrix.map(x => x[0]);

    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = n;
    let top = 0;
    let bottom = m;
    const spiral = [];
    debug = debug ? s => spiral.push(s) : s => s;

    while (left <= right - 1 && top <= bottom - 1) {
        // x x x x
        // . . . .
        // . . . .
        // . . . .
        for (let i = left; i <= right - 1; i++) 
            debug('→') && spiral.push(matrix[top][i]);
        // . . . .
        // . . . x
        // . . . x
        // . . . x
        for (let i = top + 1; i <= bottom - 1; i++) 
            debug('↓') && spiral.push(matrix[i][right - 1]);

        if (left < right - 1 && top < bottom - 1) {
            // . . . .
            // . . . .
            // . . . .
            // . x x .
            for (let i = right - 2; i >= left + 1; i--) 
                debug('←') && spiral.push(matrix[bottom - 1][i]);
            // . . . .
            // x . . .
            // x . . .
            // x . . .
            for (let i = bottom - 1; i >= top + 1; i--) 
                debug('↑') && spiral.push(matrix[i][left]);
        }

        left++;
        right--;
        top++;
        bottom--;
    }

    return spiral;
}

console.log(spiral([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
], true));

console.log(spiral([
    [2,3,4],
    [5,6,7],
    [8,9,10],
    [11,12,13],
    [14,15,16],
], true));

console.log(spiral([
    [1],
], true));

console.log(spiral([
    [1,2,3],
], true));

console.log(spiral([
    [1,2,3,],
    [4,5,6,],
], true));

console.log(spiral([
    [1,],
    [2,],
    [3,],
], true));

console.log(spiral([
    [1,2,],
    [3,4,],
    [5,6,],
], true));

console.log(spiral([
    [1,2,],
    [3,4,],
    [5,6,],
    [7,8,]
], true));

console.log(spiral([
    [1,2,3,4,],
    [5,6,7,8,],
], true));

console.log(spiral([
    [1,2,3,],
    [4,5,6,],
    [7,8,9,],
], true));

console.log(spiral([
    [1,2,3,4,],
    [5,6,7,8,],
    [9,10,11,12],
    [13,14,15,16],
], true));

console.log(spiral([
    [1,2,3,4,5,],
    [6,7,8,9,10,],
    [11,12,13,14,15,],
    [16,17,18,19,20,],
    [21,22,23,24,25,],
], true));