function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        console.log({ currentVal, prevVal: arr[i - 1] })
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            console.log(arr);
            arr[j] = currentVal;
            console.log(arr);
        }
    }
    return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
