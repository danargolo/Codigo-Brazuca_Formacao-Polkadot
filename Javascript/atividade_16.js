const isPalindrome = (str) => {
  const formatedStr = str.replace(/\s+/g, '').toLowerCase();  

  for(let i = 0; i < (str.length / 2); i++) {       
    if(formatedStr[i] !== formatedStr[formatedStr.length - 1 - i]) {
      return false
    }
  }

  return true
};

// console.log(isPalindrome('ae'));
// console.log(isPalindrome('aba'));
// console.log(isPalindrome('amora'));
// console.log(isPalindrome('mussum'));
console.log(isPalindrome('A mala nada na lama'));
