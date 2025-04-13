const convertToCelsius = function (tempInF) {
  // x °C ≘ (x ×⁠ 9/5⁠ + 32) °F
  return Math.floor((tempInF - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (tempInC) {
  // x °F ≘ (x − 32) × ⁠5/9 °C
  return Math.floor((tempInC * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
