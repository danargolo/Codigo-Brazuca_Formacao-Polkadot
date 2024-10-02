const multiplyNumbers = (array) => {
  return array.reduce((acc, number) => acc * number, 1)
}

console.log(multiplyNumbers([2,3,2,5]))