// нахождение НОД

const gcd = (a, b) => {
    if (!b) return a;
    if (b > a) return gcd(b, a);
    return gcd(b, a % b);
}

console.log(gcd(15,25));
console.log(gcd(134, 275));
console.log(gcd(100, 75));