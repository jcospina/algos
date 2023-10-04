function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let lastTallest = 0;
    let maxArea = 0;
    while(left <= right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }
        if (height[left] > height[right]) {
            
        }
        left++;
        right++;
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
