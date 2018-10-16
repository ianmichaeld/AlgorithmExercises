/*
The regular expression 'pattern' should match a number followed by a pair of 
matched brackets containing any number of (non-bracket) characters. The 
variable 'times' will capture the number, while the variable 'toRepeat' will 
capture the characters within the brackets.

The below could be implemented without mutating the passed argument by simply 
working on a copy of the argument within the function, although this would 
increase the function's space complexity.
*/

const decodeString = s => {
  const pattern = /(\d+)\[([^\[\]]*)\]/
  while (s.match(pattern)) {
    let times = +s.match(pattern)[1]
    let toRepeat = s.match(pattern)[2]
    let repeated = toRepeat.repeat(times)
    s = s.replace(pattern, repeated)
  }
  return s
}
