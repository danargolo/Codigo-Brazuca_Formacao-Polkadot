const printNumbers = (length) => {

  const numbers = Array.from({length:length})

  numbers.forEach((_, i) =>{
    console.log(i+1)
  })
}

printNumbers(10)