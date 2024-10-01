const removeSpaces = (str) => {
  const formatedStr = str.replace(/\s+/g, '')

  return formatedStr
}

console.log(removeSpaces('teste de retirada do espaço'));
