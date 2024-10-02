const sumEven = (array) => {
  let sum = 0

  array.map((number) => {
    if(number % 2 === 0) sum += number
  })

  return sum
}

console.log(sumEven([1,2,3,4,5,6,7,8,9]))