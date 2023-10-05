function maxArea(height: number[]): number {
    if (height.length <= 1) {
        return 0;
    }
    let left = 0;
    let right = height.length - 1;
    let maxArea = Math.min(height[left], height[right]) * (right - left);
    while(left <= right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }
        if (height[left] > height[right]) {
            right--;            
        } else if (height[left] <= height[right]) {
            left++;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,100,2,100,4,8,3,7]));
