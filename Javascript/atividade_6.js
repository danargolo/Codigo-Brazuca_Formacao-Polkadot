const sumNumbers = (length) => {
  const numbers = Array.from({length:length}, (_, i) => i+1)

  let sum = numbers.reduce((acc, cur) => (acc + cur), 0)

  return sum
}

console.log(sumNumbers(100))