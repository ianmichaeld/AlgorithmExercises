const binToDec = bin => {
  let red = (bin + '').split('').reduceRight(
    (reducer, digit) => {
      reducer.dec += digit * Math.pow(2, reducer.pow++)
    },
    { dec: 0, pow: 0 }
  )
  return red.dec
}
