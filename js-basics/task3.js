// наименьшая цифра числа

const minDigit = (x) => {
    let r = 9;
    [...x.toString()].forEach((el) => {
        if (el < r) r = el;
    })

    return parseInt(r);
}

console.log(minDigit(1743));
console.log(minDigit(9012));
console.log(minDigit(999));