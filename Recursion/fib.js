// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// fib sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711 ....
const fib = num => (num <= 2) ? 1 : fib(num - 1) + fib(num - 2);
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// const fib = (num) => {
//     let first = 0;
//     let second = 1;
//     let temp = 0;

//     const helper = input => {
//         if (input) {
//             temp = second;
//             second = first + second;
//             first = temp;
//             input--;
//             helper(input);
//         } else { return first }

//     }

//     helper(num);

//     return first;
// }

// const fib = (num, first = 1, second = 1, temp = 0) => {
//     if (num) {
//         temp = second;
//         second = first + second;
//         first = temp;
//         num--;
//         return fib(num, first, second);
//     }

//     return second - first
// }

// function fib(num) {
//     if (num <= 2) return 1;
//     return fib(num - 1) + fib(num - 2)
// }


// fib(2): return 1
// fib(1): return 1
// fib(3): return fib(2) + fib(1) // 1+1 = 2
// fib(2): return 1
// fib(4): return fib(3) + fib(2) // 2+1 = 3


