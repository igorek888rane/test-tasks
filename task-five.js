const mathCheck = (a, b) => {
    const check = []
    const res = []

    a.forEach(el => {
        b.forEach(item => {
            if (el === item) {
                check.push(el)
            }
        })
    })
    check.forEach(el => {
        let count = 0
        check.forEach(item => {
            if (el === item) {
                count++
                if (count === 4) {
                    res.push(el)
                }
            }
        })
    })

    return res.filter((el, i) => res.indexOf(el) === i)
}
mathCheck([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1])