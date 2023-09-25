function majorityElement(nums: number[]): number {
    const countMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currEl = nums[i];
        const currCount = countMap.get(nums[i]);
        if (currCount !== undefined) {
            countMap.set(nums[i], currCount+1);
        } else {
            countMap.set(nums[i],1 );
        }
    }
    let majorityElement;
    countMap.forEach((value, key) => {
        if (value > nums.length / 2) {
            majorityElement = key;
            return;
        }
    });
    return majorityElement;    
};
const nums = [3,2,3];
majorityElement(nums);