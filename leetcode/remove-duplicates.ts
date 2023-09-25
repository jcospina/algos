function removeDuplicates(nums: number[]): number {
    const seen = new Map();
    let lastUnique: number | undefined;
    for (let i = 0; i < nums.length; i++) {
        if(seen.get(nums[i]) === undefined) {
            if (lastUnique !== undefined) {
                lastUnique++;
                const tmp = nums[lastUnique];
                nums[lastUnique] = nums[i];
                nums[i] = tmp;
                seen.set(nums[lastUnique], lastUnique); 
            } else {
                seen.set(nums[i], i);                
                lastUnique = i;
            }
        }
    }
    return seen.size;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);