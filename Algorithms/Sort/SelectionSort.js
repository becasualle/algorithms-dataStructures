const selectionSort = arr => {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            // let temp = arr[i];
            // arr[i] = arr[min];
            // arr[min] = temp;
            swap(arr, i, min)
        }
    }
    return arr;
}

selectionSort([5, 3, 4, 1, 2]);
selectionSort([1, 6, 15, 33, 30, 32, 26, 36, 42, 45, 46, 47, 48]);
