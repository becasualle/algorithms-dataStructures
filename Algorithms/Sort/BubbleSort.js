const bubbleSort = arr => {
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            console.log({ curr: arr[j], next: arr[j + 1] })
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        console.log(`one pass complete: ${arr}`)
        if (noSwaps) break;
    }
    return arr
}

bubbleSort([5, 3, 4, 1, 2])
bubbleSort([1, 6, 15, 33, 30, 32, 26, 36, 42, 45, 46, 47, 48])
