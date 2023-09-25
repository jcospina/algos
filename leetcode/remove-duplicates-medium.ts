const maxDuplicates = 2;

function removeDuplicates(nums: number[]): number {
  if (nums.length <= maxDuplicates) return nums.length;

  let writePointer = maxDuplicates;

  for (let readPointer = maxDuplicates; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[writePointer - maxDuplicates]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  return writePointer;
}