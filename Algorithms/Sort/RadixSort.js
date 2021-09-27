const getDigit = (num, idx) => Number(String(num).split('').reverse()[idx]);
const digitCount = num => String(num).length;
const mostDigits = arr => {
    let max = 0;
    arr.forEach(num => max < digitCount(num) ? max = digitCount(num) : max);
    return max;
}

// MATH APPROACH
// const getDigit = (num, idx) => Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
// const digitCount = num => {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }
// const mostDigits = arr => {
//     let max = 0;
//     for (let i=0; i<arr.length; i++){
//         max = Math.max(max, digitCount(arr[i]))
//     }   
//     return max;
// }