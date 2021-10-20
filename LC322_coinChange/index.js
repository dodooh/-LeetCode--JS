function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coinValue = coins[j]
            if (coinValue <= i) {
                dp[i] = Math.min(dp[i], dp[i - coinValue] + 1)
            }
        }
    }
    return dp[amount] <= amount ? dp[amount] : -1
}

module.exports = coinChange;
