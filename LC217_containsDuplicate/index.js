const containsDuplicate = nums => {
    const visited  = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (visited[num]) {
            return true
        } else {
            visited[num] = true
        }
    }
    return false;
};

module.exports = containsDuplicate;
