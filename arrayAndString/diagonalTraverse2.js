function diagonalTraverse(matrix) {
    if (!matrix || !matrix.length) return

    const M = matrix[0].length
    const N = matrix.length
    const diagonal_traverse_count = M + N - 1;
    const swith_traverse_mode_diagonal_index = M - 1;
    const traverse = []

    let up_travese = true
    let x = 0
    let y = 0
    let check_bound = (up_travese, y, x) => (up_travese ? y : x) > -1 && y < N
    let move_next_on_up_traverse = (y, x) => ({ y: 0, x })

    for (let i = 0; i < diagonal_traverse_count; ++i) {
        do {
            traverse.push(matrix[y][x])
            up_travese ? (--y, ++x) : (++y, --x)
        } while (check_bound(up_travese, y, x))

        if (up_travese) {
            ({ y, x } = move_next_on_up_traverse(y, x))
        } else {
            if (y < N) x = 0
            else x += 2, --y
        }

        up_travese = !up_travese

        if (i === swith_traverse_mode_diagonal_index) {
            check_bound = (up_travese, y, x) => (up_travese ? x < M : x > -1) && y < N
            move_next_on_up_traverse = (y, x) => ({ y: y + 2, x: x - 1 })

            if (!up_travese) ++y, --x
        }
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

console.log(diagonalTraverse(matrix4x4))
