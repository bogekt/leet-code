function diagonalTraverse(matrix) {
    if (!matrix || !matrix.length) return

    const M = matrix[0].length
    const N = matrix.length
    const traverse = []

    let up_travese = true
    let x = 0
    let y = 0

    for (let i = 0; i < M; ++i) {
        do {
            traverse.push(matrix[y][x])
            up_travese ? (--y, ++x) : (++y, --x)
        } while ((up_travese ? y : x) > -1 && y < N)

        if (up_travese) {
            y = 0
        } else {
            if (y < N) x = 0
            else x += 2, --y
        }

        up_travese = !up_travese
    }

    if (!up_travese) ++y, --x

    for (let i = 1; i < N; ++i) {
        do {
            traverse.push(matrix[y][x])
            up_travese ? (--y, ++x) : (++y, --x)
        } while ((up_travese ? x < M : x > -1) && y < N)

        if (up_travese) {
            y += 2, --x
        } else {
            if (y < N) x = 0
            else x += 2, --y
        }

        up_travese = !up_travese
    }

    return traverse
}

const matrix1x4 = [
    [1],
    [2],
    [3],
    [4],
]

const matrix2x4 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
]

const matrix3x1 = [
    [1, 2, 3],
]

const matrix3x2 = [
    [1, 2, 3],
    [4, 5, 6],
]

const matrix3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const matrix4x1 = [
    [1, 2, 3, 4],
]

const matrix4x2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
]

const matrix4x4 = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16],
]

console.log(diagonalTraverse(matrix3x3))
