function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];
    let prod = 1;
    for(let i = 0; i < nums.length; i++) {
        result[i] = prod;
        prod = prod * nums[i];
    }

    prod = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] = result[j] * prod;
        prod = prod * nums[j];
    }
    return result;
};

console.log(productExceptSelf([1,2,3,4]))
// 1, 1, 2, 6
// 1, 