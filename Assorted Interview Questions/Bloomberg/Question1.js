// Time: O(n); Space: O(n)

function threeOrMore(string) {
  let appearances = [...string].reduce((obj, char) => {
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1
    }
    return obj
  }, {})

  return Object.keys(appearances).reduce((str, char) => {
    if (appearances[char] >= 3) {
      str += char
    }
    return str
  }, '')
}
