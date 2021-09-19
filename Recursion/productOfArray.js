// const productOfArray = arr => {
//     let result = 1;
//     for (num of arr) {
//         result *= num;
//     }
//     return result;
// }

const productOfArray = arr => arr.length ? arr.pop() * productOfArray(arr) : 1;

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60