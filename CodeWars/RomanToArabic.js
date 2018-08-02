function romanize(number) {
  // convert the number to a roman numeral
  const roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }
  let digits = [...(number + '')].reverse()

  const rDigit = (d, i) => {
    let rD = ''
    if (i === 3) {
      for (d; d > 0; d--) {
        rD += 'M'
      }
      return rD
    }
    if (d === 9) {
      rD = roman[Math.pow(10, i)] + roman[Math.pow(10, i + 1)]
      return rD
    }
    if (d === 4) {
      rD = roman[Math.pow(10, i)] + roman[5 * Math.pow(10, i)]
      return rD
    }
    if (d > 4) {
      rD += roman[5 * Math.pow(10, i)]
      d -= 5
    }
    for (d; d > 0; d--) {
      rD += roman[Math.pow(10, i)]
    }
    return rD
  }

  return digits
    .map((d, i) => rDigit(+d, i))
    .reverse()
    .join('')
}

function arabic(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer
  let digits = [...roman]
  let number = 0
  const arab = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  while (digits.length > 1) {
    let current = digits.shift()
    if (arab[current] < arab[digits[0]]) number -= +arab[current]
    else number += +arab[current]
  }
  return number + +arab[digits[0]]
}
