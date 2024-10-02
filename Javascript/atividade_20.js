const sumDigits = (number) => {
  const isNegative = number < 0;
  const digits = Math.abs(number).toString().split('');

  const sum = digits.reduce((acc, digit, i) => {
    return acc + (isNegative && i === 0 ? -parseInt(digit) : parseInt(digit));
  }, 0);

  return sum;
}

console.log(sumDigits(1000))
console.log(sumDigits(555))
console.log(sumDigits(-91))

