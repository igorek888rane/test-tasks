const changeWord = (int) => {
    let myNum = String(int);
    let myNumArr = [];
    for (let i = 0; i < myNum.length; i++) {
        myNumArr.push(myNum.charAt(i));
    }
    let end = +myNumArr[myNumArr.length - 1];
    let penultimate = +myNumArr[myNumArr.length - 2];

    if ((end >= 5 && end <= 9) || (end === 0) ||
        (end === 1 && penultimate === 1) || (end >= 2 && end <= 4 && penultimate === 1)) {
        return int + " компьютеров"
    } else if (end === 1 && penultimate !== 1) {
        return int + " компьютер"
    } else if (end >= 2 && end <= 4 && penultimate !== 1) {
        return int + " компьютера"
    }

}
changeWord(25)
changeWord(41)
changeWord(1048)