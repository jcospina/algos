const memoizeFn = (fn) => {
    const cache = {};
    return (n) => {
        if (!cache[n]) {
            cache[n] = fn(n)
        }
        return cache[n];
    }
}

const factorial = (n) => {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n-1)
}


const memoFactorial = memoizeFn(factorial);

console.log(memoFactorial(0))
console.log(memoFactorial(1))
console.log(memoFactorial(2))
console.log(memoFactorial(3))
console.log(memoFactorial(4))
console.log(memoFactorial(5))