
function removeElement(nums: number[], val: number): number {
    let diff = 0;
    let head = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            const tmp = nums[head];
            nums[head] = nums[i];
            nums[i] = tmp;
            diff++;
            head++
        }
    }
    return diff;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;
removeElement(nums, val);
console.log(nums);