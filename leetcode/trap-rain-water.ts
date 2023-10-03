function trap(height: number[]): number {
    let waterCount = 0;
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];
    let leftIdx = 0;
    let rightIdx = height.length - 1;    
    while(leftIdx <= rightIdx) {
        if (maxLeft > maxRight) {
            waterCount += Math.max(maxRight - height[rightIdx], 0);    
            rightIdx--;
        } else {
            waterCount += Math.max(maxLeft - height[leftIdx], 0);                        
            leftIdx++;
        }
        if (height[leftIdx] > maxLeft) {
            maxLeft = height[leftIdx];
        }
        if (height[rightIdx] > maxRight) {
            maxRight = height[rightIdx];
        }
    }    
    return waterCount;
};

const h1 = [0,1,0,2,1,0,1,3,2,1,2,1];
const h2 = [4,2,0,3,2,5];
console.log(trap(h1))