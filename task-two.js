const rounding = (float) => {
    const floatFive = float % 5
    if (floatFive === 0) {
        return float
    }
    if (floatFive < 2.5) {
        return float - floatFive
    } else {
        return Math.round(float + 5 - floatFive)
    }


}
rounding(27)
rounding(27.8)
rounding(41.7)