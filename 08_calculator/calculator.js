const add = function(num1,num2) {
	return (num1 + num2) ;
};

const subtract = function(num1,num2) {
	return (num1-num2);
};

const sum = function(array) {
  let sum = 0;
	for (let num of array){
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let num of array)
    product *= num;

  return product;
};

const power = function(base,exponent) {
  return base ** exponent;
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;
  else 
    return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
