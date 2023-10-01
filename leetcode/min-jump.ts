function jump(nums: number[]): number {

    let n = nums.length;
    if(n == 1)
        return 0;

    let jumps = 1;
    let reachable = nums[0];
    let nextMaxReachable = nums[0];
    if(reachable >= n-1)
        return jumps;
    
    for(let i=1; i<n; i++)
    {
        nextMaxReachable = Math.max(nextMaxReachable, i + nums[i]);

        if(i == reachable)
        {
            reachable = nextMaxReachable;
            jumps++;
            if(reachable >= n-1)
                break;
        }
    }

    return jumps;
};
const nums = [2,1,3,2,1,4];
