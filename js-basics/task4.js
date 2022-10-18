// pluralization

const pluralizeRecords = (x) => {
    const base = "В результате выполнения запроса";
    const patterns = {
        "one": ["была найдена", "запись"],
        "few": ["было найдено", "записи"],
        "many": ["было найдено", "записей"]
    }

    let current = (x % 10 === 1 && x % 100 != 11) ? "one" : ((x % 10 >= 2 && x % 10 <= 4) ? "few" : "many");
    return `${base} ${patterns[current][0]} ${x} ${patterns[current][1]}`
}

console.log(pluralizeRecords(26));
console.log(pluralizeRecords(381));
console.log(pluralizeRecords(511));
console.log(pluralizeRecords(501));
console.log(pluralizeRecords(22));