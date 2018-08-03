const binToDec = binary => {
  let decimal = (binary + '').split('').reduceRight(
    (reducer, digit) => {
      reducer.number += digit * Math.pow(2, reducer.power++)
      return reducer
    },
    { number: 0, power: 0 }
  )
  return decimal.number
}
