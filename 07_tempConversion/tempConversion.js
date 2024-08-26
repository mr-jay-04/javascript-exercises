const convertToCelsius = function(tempr) {
  const tempInCelsius = (tempr-32)*(5/9);
  return +tempInCelsius.toFixed(1);
};

const convertToFahrenheit = function(tempr) {
  const tempInFarenheit = tempr * 9/5 + 32;
  return +tempInFarenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
