const randomNumber = (range = 100) => {
  const random = Math.floor(Math.random() * range)

  return random
}

console.log(randomNumber())