const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    let pivot = arr[startIdx];
    let pivotIdx = startIdx;

    for (let i = startIdx + 1; i <= endIdx; i++) {
        // console.log({ curr: arr[i] })
        if (pivot > arr[i]) {
            // console.log(arr);
            pivotIdx++;
            // console.log({pivotIdx, i, elPivIdx:arr[pivotIdx], curr: arr[i]});
            swap(arr, i, pivotIdx);
            // console.log(arr);
        }
    }
    swap(arr, arr.indexOf(pivot), pivotIdx);

    return pivotIdx;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]) // 3
// start, pivotIndex = 0  [4, 8, 2, 1, 5, 7, 6, 3]
// i=1, pivotIndex = 0 [4, 8, 2, 1, 5, 7, 6, 3]
// i=2, pivotIndex = 1 [4, 2, 8, 1, 5, 7, 6, 3]
// i=3, pivotIndex = 2 [4, 2, 1, 8, 5, 7, 6, 3]
// i=4, pivotIndex = 2 [4, 2, 1, 8, 5, 7, 6, 3]
// i=5, pivotIndex = 2 [4, 2, 1, 8, 5, 7, 6, 3]
// i=6, pivotIndex = 2 [4, 2, 1, 8, 5, 7, 6, 3]
// i=7, pivotIndex = 3 [4, 2, 1, 3, 5, 7, 6, 8]

// swap pivot with pivotIndex [3, 2, 1, 4, 5, 7, 6, 8]

const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right) {
        const pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

quickSort([4, 6, 9, 1, 2, 5, 3])
// [4, 6, 9, 1, 2, 5, 3]
// [3, 1, 2, 4, 9, 5, 6]
//           4
// 3, 2, 1      6, 9, 5
//       3         6
// 2, 1         5     9
// 2