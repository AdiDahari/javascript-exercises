const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  return numArr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (numArr) {
  return numArr.reduce((prev, curr) => prev * curr);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (num) {
  let res = 1;
  for (let i = 1; i <= num; i++) res *= i;

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
