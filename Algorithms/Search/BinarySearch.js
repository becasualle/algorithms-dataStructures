const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    let pointer;
    while (left <= right) {
        middle = Math.round((right + left) / 2);
        pointer = arr[middle];
        if (pointer === val) return middle;
        if (val > pointer) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
