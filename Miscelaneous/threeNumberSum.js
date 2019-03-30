function threeNumberSum(array, targetSum) {
  let result = []
  array = array.sort((a, b) => a - b)
  let length = array.length
  for (let i = 0; i < length - 2; i++) {
    let [left, right] = [i + 1, length - 1]
    while (left < right) {
      let current = array[i] + array[left] + array[right]
      if (current === targetSum) {
        result.push([array[i], array[left], array[right]])
        left++
        right--
      } else if (current < targetSum) {
        left++
      } else {
        right--
      }
    }
  }
  return result
}
