const separateByComma = (cities) => {
    cities[cities.length - 1] += '.'
    return cities.join()
}
separateByComma(['Москва', 'Санкт-Петербург', 'Воронеж'])