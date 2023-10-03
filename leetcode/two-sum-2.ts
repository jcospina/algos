function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while(left <= right) {    
        if (numbers[right] > target || numbers[right] + numbers[left] > target) {
            if (numbers[right] + numbers[left] === target) {
                return [left+1, right+1];
            } else if (numbers[left] < 0 && numbers[right] + numbers[left] < target) {
                left++;
            } else {
                right--;
            }   
        } else {
            if (target - numbers[right] === numbers[left]) {
                return [left+1, right+1];
            } else {
                left++;
            }
        }
    }
    return [];
};

const i = [-10,-8,-2,1,2,5,6]
const t = 0;
console.log(twoSum(i,t));