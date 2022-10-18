// фибоначчи
const base = [0, 1];

const fibb = (n) => {
    let base = [0, 1];
    for (let i = 1; i < n-1; i++) {
        base = [base[1], base[0] + base[1]];
    }
    return base[1];
}

console.log(fibb(5));
console.log(fibb(14));
console.log(fibb(56));
console.log(fibb(3));