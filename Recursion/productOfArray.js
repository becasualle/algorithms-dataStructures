// get array and return multiply of each element of array

const productOfArray = arr => arr.length ? arr.pop() * productOfArray(arr) : 1;

// const productOfArray = arr => {
//     let result = 1;
//     for (num of arr) {
//         result *= num;
//     }
//     return result;
// }

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([173, 895, 7396])); // 1 145 159 660