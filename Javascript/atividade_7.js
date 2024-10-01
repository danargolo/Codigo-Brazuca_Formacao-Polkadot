const isPrime = (number) => {
  if(number <= 1) return false;

  for(let i = 2; i <= number ** 0.5; i++) {
    if(number % i === 0) return false
  }
  return true
}

console.log(isPrime(2));
console.log(isPrime(75));
console.log(isPrime(397));
