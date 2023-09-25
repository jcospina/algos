function maxProfit(prices: number[]): number {
    let start = 0;
    let end = prices.length - 2;
    let maxProfit = 0;
    while(start <= end) {
        const startPrice = prices[start];
        let profit = 0;
        for (let i = start + 1; i < prices.length; i++) {
            if (prices[i] - startPrice > profit) {
                profit = prices[i] - startPrice;
            }
        }
        start++;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))