// Implement linear search

function linearSearch(list, item) {
    for(let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return i; // returns the first occurrence
        }
    }
    return -1;
}

linearSearch([2,5,7,90,103], 90)