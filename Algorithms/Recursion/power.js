const power = (num, pow) => (pow === 0) ? 1 : num * power(num, pow - 1);

console.log(power(2, 0)) //1
console.log(power(2, 5)) //32