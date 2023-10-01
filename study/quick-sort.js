const unsortedArray = [
  64, 25, 12, 22, 11, 90, 34, 7, 23, 32,
  50, 43, 53, 46, 57, 4, 77, 9, 17, 36,
  89, 51, 95, 70, 67, 15, 63, 55, 60, 40,
  74, 5, 33, 65, 86, 99, 98, 58, 49, 73,
  61, 81, 13, 38, 42, 37, 84, 66, 68, 92,
  1, 96, 21, 29, 80, 100, 91, 24, 69, 44,
  20, 14, 94, 76, 83, 79, 78, 3, 10, 88,
  75, 2, 59, 6, 18, 19, 47, 72, 87, 48,
  28, 31, 93, 71, 62, 35, 41, 30, 8, 26,
  45, 56, 85, 39, 82, 27, 97, 54, 52, 16
];

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const pivotIdx = Math.floor(arr.length / 2);
    const pivotEl = arr[pivotIdx];

    const less = [];
    const equal = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr < pivotEl) {
            less.push(curr)
        } else if (curr > pivotEl) {
            greater.push(curr)
        } else {
            equal.push(greater)
        }
    }

    return [...quickSort(less), ...quickSort(equal), ...quickSort(greater)]
}

function partition(arr, left, right) {
    // it's easier to pick the right as pivot to avoid implementing logic
    // to move the pivot around
    const pivot = arr[right];
    let head = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            const tmp = arr[i];
            arr[i] = arr[head];
            arr[head] = tmp
            head++;
        }        
    }


    arr[right] = arr[head]
    arr[head] = pivot;
    return head; // the new pivot index
}
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }
    const pivot = partition(arr, left, right);
    quickSortInPlace(arr, left, pivot - 1); // Sort left part
    quickSortInPlace(arr, pivot + 1, right); // Sort right part
}

console.time('quickSort')
quickSort(unsortedArray);
console.timeEnd('quickSort')

console.time('quickSortInPlace')
quickSortInPlace(unsortedArray);
console.timeEnd('quickSortInPlace')