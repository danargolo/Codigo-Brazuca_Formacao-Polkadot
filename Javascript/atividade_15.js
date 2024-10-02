const counterChar = (str, char) => {
  let counterMap = {}

  for(let i = 0; i < str.length; i++) {
    counterMap[str[i]] = (counterMap[str[i]] || 0) + 1
  }

  console.log(counterMap);
  

  return counterMap[char] || 0

}

console.log(counterChar('testando a funcao', 'z'));
