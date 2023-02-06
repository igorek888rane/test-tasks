const multiplyTable = (num) => {
    let table = []
    let horizontalScale = []
    horizontalScale[0] = ' '

    for (let i = 1; i <= num; i++) {
        table[i] = ['' + i]
        horizontalScale[i] = [' ' + i]
        for (let j = 1; j <= num; j++) {
            if (i * j < 10) {
                table[i][j] = ' ' + j * i
            } else {
                table[i][j] = '' + j * i
            }
        }

    }
    table[0] = horizontalScale
    return table.map(el => el.join(' '))
}
multiplyTable(5)