let twoElementSum = (array, target) => {
  let memo = {}
  for (num of array) {
    if (memo[num]) return true
    else (memo[target - num] = true)
  }
  return false
}
