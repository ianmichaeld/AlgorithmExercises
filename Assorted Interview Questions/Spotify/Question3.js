const changePossibilities = (amount, denominations) => {
  let memo = Array(amount + 1).fill(0)
  memo[0] = 1
  denominations.forEach(denomination => {
    for (i = denomination; i < memo.length; i++) {
      memo[i] += memo[i - denomination]
    }
  })
  return memo[amount]
}
