/*
The question prompt does not specify how to treat characters that are found in s but not in t. In the implementation below, they will be sorted to the end of the string in their original order.
*/

const sortByStrings = (s, t) => {
  let order = t.split('').reduce((accumulator, currentChar, currentIndex) => {
    accumulator[currentChar] = currentIndex + 1
    return accumulator
  }, {})

  return s
    .split('')
    .sort((a, b) => (order[a] || s.length + 1) - (order[b] || s.length + 1))
    .join('')
}
