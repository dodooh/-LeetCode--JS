var containsNearbyDuplicate = function (nums, k) {
    let visited = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (visited[num] !== undefined) {
            if (Math.abs(visited[num] - i) <= k) {
                return true;
            } else {
                visited[num] = i;
            }
        } else {
            visited[num] = i;
        }
    }
    return false;
};
module.exports = containsNearbyDuplicate;
