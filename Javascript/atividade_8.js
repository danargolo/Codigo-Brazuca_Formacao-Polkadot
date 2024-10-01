const avgValue = (array) => {
  const length = array.length

  const sum = array.reduce((acc, cur) => (acc + cur), 0)

  const average = sum / length

  return average
}

console.log(avgValue([16,2,3,4,5]));
