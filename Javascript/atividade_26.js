const checkSubstring = (str, substr) => {
  return str.toLowerCase().includes(substr)
}

console.log(checkSubstring('Hello world, launch rocket to Mars', 'mars'))