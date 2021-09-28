const getDigit = (num, idx) => Number(String(num).split('').reverse()[idx]) || 0;
const digitCount = num => String(num).length;
const mostDigits = arr => {
    let max = 0;
    arr.forEach(num => max < digitCount(num) ? max = digitCount(num) : max);
    return max;
}
const radixSort = numbers => {
    const maxDigits = mostDigits(numbers);

    for (let i = 0; i < maxDigits; i++) {
        let storage = Array.from({ length: 10 }, () => []);

        for (num of numbers) {
            const digit = getDigit(num, i);
            storage[digit].push(num)
            //             if (digit) {
            //                 storage[digit].push(num)
            //             } else {storage[0].push(num)}
        }
        // console.log(storage);
        numbers = [].concat(...storage);
        // console.log(numbers);
    }

    return numbers;
}
radixSort([3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127])

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