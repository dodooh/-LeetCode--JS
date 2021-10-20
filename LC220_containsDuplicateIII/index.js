var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const s = new Set(nums).length;
    const n = nums.length
    // If t == 0 which mean return true If and only If there is at least 1 duplicate number
    if (t == 0 && n == s) return false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < i + 1 + k; j++) {
            if (j >= n) break;
            if (Math.abs(nums[i] - nums[j]) <= t) return true;
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
module.exports = containsNearbyAlmostDuplicate;
