const celsiusToFahrenheit = (celsius) => {
  const SCALE = 9 / 5;
  const CONSTANT = 32;
  
  return (celsius * SCALE) + CONSTANT;
};

console.log(celsiusToFahrenheit(20))