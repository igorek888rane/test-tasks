const check = (number) => {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return "Составное число";
            }
        }
        return "Простое число";
    } else {
        return "Число должно быть больше 1";
    }
}

check(15)