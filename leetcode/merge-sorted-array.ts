/**
 Do not return anything, modify nums1 in-place instead.
 */
function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m + n - 1;
    let n1Idx = m - 1;
    let n2Idx = n - 1;        
    while (n2Idx >= 0) {
        const currN1 = nums1[n1Idx];
        const currN2 = nums2[n2Idx];
        if (n1Idx >= 0 && currN1 >= currN2 ) {
            nums1[i] = currN1;
            nums1[n1Idx] = nums1[i];
            n1Idx--;
        } else {
            nums1[i] = currN2;
            n2Idx--;
        }                 
        i--;             
    }    
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
mergeSortedArray(nums1, 3, nums2, 3);
console.log(nums1);