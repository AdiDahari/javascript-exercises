const repeatString = function (str, n) {
  res = "";
  if (n < 0) {
    return "ERROR";
  }
  for (let i = 0; i < n; i++) {
    res += str;
  }

  return res;
};

// Do not edit below this line
module.exports = repeatString;
