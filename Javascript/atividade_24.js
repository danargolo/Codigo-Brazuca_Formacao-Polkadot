const getDivisors = (number) => {
  let divisors = []

  for(let i = 0; i <= number; i++) {
    if(number % i === 0) {
      divisors.push(i)
    }
  }

  return divisors
}

console.log(getDivisors(30))