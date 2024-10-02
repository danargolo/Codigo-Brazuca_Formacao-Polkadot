const isSorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}

console.log(isSorted([1,2,3,4,4]))
console.log(isSorted([3,2,1]))
