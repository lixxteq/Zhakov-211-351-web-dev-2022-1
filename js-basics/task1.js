// возведение в степень

const pow = (x, n) => {
    console.log(`x = ${x}, n = ${n}`);
    if (n >= 0 && Math.floor(n) === n) {
        return (() => {
            const base = x;
            for (let i = 0; i < n-1; i++) {
                x *= base;
            }
            return x;
        })()
    }
    return "Не соответствует условиям"
}

console.log(pow(2, 5))
console.log(pow(6, 7))
console.log(pow(-10, 3))
