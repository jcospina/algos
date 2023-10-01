const cache = new Map<number, boolean>();
function canJump(nums: number[]): boolean {        
    const nextJump = (nums: number[], startIndex: number): boolean => {
        let maxJump = startIndex + nums[startIndex];
        if (maxJump >= nums.length - 1) {
            return true;
        }
        if (maxJump === startIndex && startIndex < nums.length - 1) {
            return false;
        }
        if (cache.get(startIndex) !== undefined) {
            return cache.get(startIndex)!;
        }
        for (let i = maxJump; i > startIndex; i--) {
            if(nextJump(nums, i)) { 
                cache.set(startIndex, true)
                return true;
            }

        }        
        cache.set(startIndex, false)
        return false;
    }
    return nextJump(nums, 0);
};

const nums = [2,3,1,0,4];
console.log(canJump(nums));