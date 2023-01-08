const add = function(a,b) {
  return a + b	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
  let sum = 0;
  let arr = [...array];
  for (let num of arr) {
    sum += num;
  }
	return sum
};

const multiply = function(array) {
  let mult = 1;
  let arr = [...array];
  for (let num of arr) {
    mult *= num;
  }
  return mult
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  let fact = 1;  
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact
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
