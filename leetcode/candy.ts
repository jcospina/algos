function candy(ratings: number[]): number {
    const candies = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            candies[i] = candies[i-1] + 1;
        } else if(ratings[i] < ratings[i-1]) {
            if (candies[i] >= candies[i-1]) {
                candies[i-1] = candies[i] + 1;
            }            
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            if (candies[i] <= candies[i+1]) {
                candies[i] = candies[i+1] + 1;
            }
        }
    }
    return candies.reduce((val, acc) => val + acc, 0);
};

const ratings = [1,6,10,8,7,3,2];
console.log(candy(ratings));
