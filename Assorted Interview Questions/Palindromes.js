/*

Write a program that loops through this list of strings and prints:

{string} is a PALINDROME" if the string is a palindrome
{string} is a WHAMMY" if it's a palindrome and a phrase (more than 1 word)
{string} is nothing special" for everything else.
{string} is a PSEUDO WHAMMY" if it is a phrase that contains a palindrome.

['copheescript', 'radar', 'noon time', 'a santa at nasa', 'i like cheese']

*/

function isPalindrome(str) {
  function hasSpaces(str) {
    return str.split(' ').length > 1
  }

  function palindrome(str) {
    let forward = str
      .split('')
      .filter(char => char !== ' ')
      .join('')
    let reversed = str
      .split('')
      .filter(char => char !== ' ')
      .reverse()
      .join('')
    return reversed === forward && str.length > 1
  }

  function hasPalindrome(str) {
    return str.split(' ').some(word => palindrome(word))
  }

  if (palindrome(str) && hasSpaces(str)) {
    console.log(`${str} is a WHAMMY`)
  } else if (palindrome(str)) {
    console.log(`${str} is a PALINDROME`)
  } else if (hasPalindrome(str)) {
    console.log(`${str} is a PSEUDO WHAMMY`)
  } else {
    console.log(`${str} is nothing specal`)
  }
}

let list = [
  'copheescript',
  'radar',
  'noon time',
  'a santa at nasa',
  'i like cheese',
  ' ',
  'asdfa'
]

list.forEach(word => isPalindrome(word))
