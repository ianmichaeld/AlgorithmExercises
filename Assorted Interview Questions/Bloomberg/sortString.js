/* Given a string, return the characters of the string sorted first by the number of occurances of that character (decreasing) and in the case of characters appearing the same number of times by lexicographical order.
Examples:
'bbaaccc' => 'cccaabb'
'abcddeeef' => 'eeeddabcf'
*/

let sortString = s => {
  let count = {}
  let result = ''
  for (let char of s) {
    if (count[char]) {
      count[char]++
    } else {
      count[char] = 1
    }
  }
  let charCounts = Object.entries(count).sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1]
    } else {
      return a[0] < b[0] ? -1 : 1
    }
  })
  charCounts.forEach(entry => (result += entry[0].repeat(entry[1])))
  return result
}
