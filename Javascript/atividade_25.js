const replaceVowels = (str) => {
  const regex = /[aeiouáàâãéêíóôõú]/gi
  const replacedStr = str.replace(regex,'*')

  return replacedStr
}

console.log(replaceVowels('a casa da Alana é feita de ovo, uva e sabão'))