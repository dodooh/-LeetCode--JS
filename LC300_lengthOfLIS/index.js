function lengthOfLIS(nums) {
    if (nums.length === 0) return 0
    let dpSubsequence = new Array(nums.length).fill(1)
    
    let maxSoFar = 1
    
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                dpSubsequence[j] = Math.max(dpSubsequence[i] + 1, dpSubsequence[j])
            }
        }
        maxSoFar = Math.max(maxSoFar, dpSubsequence[j])
    }
    return maxSoFar
}

module.exports = lengthOfLIS;
