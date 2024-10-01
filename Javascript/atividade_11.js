const checkNumber = (number, array) => {
  const check = array.includes(number)

  return check 
    ? console.log(`${number} está presente.`) 
    : console.log('Número não encontrado.')
}

checkNumber(6, [2, 44, 5, 90, 17, 32, 3, 11])