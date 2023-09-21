// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => n*10;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizeFn = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args)
        }
        return cache[key];
    }
}

const memoTimes10 = memoizeFn(times10);

console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached





