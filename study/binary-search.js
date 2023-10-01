 // get the value at the middle of the list
    // compare item with such value
    // if it's equal return
    // if it's less than search on the first half
    // if it's greater than search on the second half

 // Recursive
 function recursiveBinarySearch(list, item) {
    const search = (start, end) => { // 90
        const middleIndex = Math.floor((end + start) / 2); // 2 -         
        if (item === list[middleIndex]) { // No
            return middleIndex
        }
        if (start >= end) {
            return -1;
        }
        if (item < list[middleIndex]) { // No 
            return search(start, middleIndex - 1)
        }
        if (item > list[middleIndex]) { // Si
            return search(middleIndex + 1, end) // 2,5
        }
    }    

    return search(0, list.length - 1);
    
 }

 function iterativeBinarySearch(list, item) {
    let min = 0;
    let max = list.length - 1;
    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        if (item === list[middle]) {
            return middle;
        }
        if (item > list[middle]) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }
    return -1;
 }

console.time('recursive')
recursiveBinarySearch([2,6,7,90,103, 900, 1890, 7675], 90);
console.timeEnd('recursive')

console.time('iterative')
iterativeBinarySearch([2,6,7,90,103, 900, 1890, 7675], 90);
console.timeEnd('iterative')