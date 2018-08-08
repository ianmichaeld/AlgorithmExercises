/* Bubble Sort:
Can be optimized further by nesting for loop in a while
loop and using a boolean to break out in case there are no swaps made on a given pass (i.e. array is sorted).
*/

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - (i + 1); j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

// Insertion Sort:

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
      j--
    }
  }
  return array
}
