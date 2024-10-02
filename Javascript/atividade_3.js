const isEvenOrOdd = (number) => {
  return number % 2 === 0 
    ? console.log(`${number} é par.`) 
    : console.log(`${number} é ímpar.`)
}

isEvenOrOdd(-2)