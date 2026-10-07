const add = function(a, b) {
  a + b;
};

const subtract = function(a, b) {
  a - b;
};

const sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b);

};

const power = function (arr) {
  let result = 1;
  for (i = 0; i < arr[1]; i++) {
    result = result * arr[0];
  }

  return result;

};

const factorial = function (x) {
  let result = 1;
  for (i = 1; i <= x; i++) {
    result *= i;
  }

  return result;
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
