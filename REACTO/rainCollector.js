const rainCollector = arr => {
  let currentHeight = Math.max(...arr)
  let total = 0
  while (currentHeight > 0) {
    let startIndex = null
    let endIndex = null
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= currentHeight) {
        if (!startIndex) {
          startIndex += i
        } else {
          endIndex = i
          total += endIndex - (startIndex + 1)
          startIndex = endIndex
          endIndex = null
        }
      }
    }
    currentHeight--
  }
  return total
}

let sampleArray = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1, 0]
