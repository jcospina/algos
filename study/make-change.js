// Write a function, makeChange, that returns an integer that represents the least 
// number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25

function makeChange(coins, amount) {
    coins.sort((a,b) => b-a);
    let coinCounter = 0;
    let coinIndex = 0;
    while (amount > 0) {
        if (amount - coins[coinIndex] >= 0) {
            coinCounter++;
            amount -= coins[coinIndex];
        } else {
            coinIndex++;
        }
    }
    return coinCounter;
}

// // input amount: 40 , output # of coins: 3 (25, 10, 5)
// console.log(makeChange([5,25,10], 40))
// // input amount: 35, output # of coins: 2 (25, 10) 
// console.log(makeChange([5,25,10], 35))
// // not correct since it returns 3 and the least number of coins that add up is 2 (6-6)
// console.log(makeChange([1,6,10], 12))


// Brute force takes longer but allows me to get a correct answer for every case

function makeChangeRecursive(coins, amount) {        
    if (amount === 0) {
        return 0;
    }
    let minCoins;
    for (let i = 0; i < coins.length; i++) {
        console.log(`ammount: ${amount} - currentCoin: ${coins[i]}`)
        if (amount - coins[i] >= 0) {
            let result = makeChangeRecursive(coins, amount - coins[i]);    
            console.log(`result: ${result}`)
            if (minCoins === undefined || result < minCoins) {
                minCoins = result;
                console.log(`minCoins: ${minCoins}`)
            }            
        }
    }
    
    return minCoins + 1;
}

// // input amount: 40 , output # of coins: 3 (25, 10, 5)
// console.log(makeChangeRecursive([5,25,10], 40))
// // input amount: 35, output # of coins: 2 (25, 10)  
// console.log(makeChangeRecursive([5,25,10], 35))
// not correct since it returns 3 and the least number of coins that add up is 2 (6-6)
console.log(makeChangeRecursive([1,6,10], 12))