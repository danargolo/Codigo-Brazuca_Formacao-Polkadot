const countOdd = (array) => {
  let counter = 0;
  
  array.map((number) => {
    if(number % 2 !== 0) {
      counter += 1
    }
  })

  return counter
}

console.log(countOdd([1,3,2,4,5,6,7,8,9,10]))