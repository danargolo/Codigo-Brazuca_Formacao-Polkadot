const randomNumber = (range = 100) => {
  const random = Math.floor((Math.random() * range) + 1)

  return random
}

console.log(randomNumber())