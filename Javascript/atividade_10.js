const countVowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return console.log(`A string possui ${matches.length} vogais.`);
};

countVowels('Abacate');
