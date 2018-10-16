/*
Given nums, an array of integers, return an array of *unique* triplets of 
integers within nums that sum to 0.
Ex: [-1, 0, 1, 2, -1, -4] => [[-1, 0, 1], [-1, -1, 2]]
*/

const threeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b)
  const len = sorted.length
  let result = []

  const nextIndex = (arr, pointer, step) => {
    while (arr[pointer] === arr[pointer + step]) {
      pointer += step
    }
    return pointer + step
  }

  if (len < 3) {
    return result
  }

  for (let i = 0; i < len - 2; ) {
    if (sorted[i] > 0) {
      return result
    }
    let [left, right] = [i + 1, len - 1]
    while (left < right) {
      if (sorted[i] + sorted[left] > 0) {
        break
      }
      let current = sorted[i] + sorted[left] + sorted[right]
      if (current === 0) {
        result.push([sorted[i], sorted[left], sorted[right]])
        left = nextIndex(sorted, left, 1)
        right = nextIndex(sorted, right, -1)
      } else if (current < 0) {
        left = nextIndex(sorted, left, 1)
      } else {
        right = nextIndex(sorted, right, -1)
      }
    }
    i = nextIndex(sorted, i, 1)
  }
  return result
}
