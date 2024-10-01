const fibonacci = (limit) => {
  let arr = [0, 1]

  for(let i = 2; i <= limit -1; i++) {
    arr[i] = arr[i -1] + arr[i -2]  
  }

  return arr
}

console.log(fibonacci(10));
