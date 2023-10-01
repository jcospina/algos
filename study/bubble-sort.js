function bubbleSort(array) {    
    let ordered = 1;
    for (let i = 0; i < array.length; i++) {
        let pointer = 0;
        while(pointer < array.length - ordered) {
            if (array[pointer] > array[pointer+1]) {
                const tmp = array[pointer + 1];
                array[pointer + 1] = array[pointer];
                array[pointer] = tmp;
            }
            pointer++;
        }
        ordered++;
    }
}

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

console.time('bubbleSort')
bubbleSort(unsortedArray);
console.timeEnd('bubbleSort')



