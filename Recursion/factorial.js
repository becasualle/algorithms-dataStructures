const factorial = num => (num === 1 || num === 0) ? 1 : num * factorial(num - 1)

console.log(factorial(0)); //1
console.log(factorial(4)); //24
console.log(factorial(7)); //5040