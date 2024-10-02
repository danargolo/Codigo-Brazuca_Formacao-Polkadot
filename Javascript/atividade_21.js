const checkMultiples = (num1, num2) => {
  if (num2 === 0) {
    return false;
  }
  return num1 % num2 === 0;
}

console.log(checkMultiples(9, 3))
console.log(checkMultiples(10, 2))
console.log(checkMultiples(11, 5))
