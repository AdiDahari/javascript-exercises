const sumAll = function (firstNum, lastNum) {
  if (
    !Number.isInteger(firstNum) ||
    firstNum <= 0 ||
    !Number.isInteger(lastNum) ||
    lastNum <= 0
  ) {
    return "ERROR";
  }
  const maxNum = Math.max(lastNum, firstNum);
  const minNum = Math.min(lastNum, firstNum);
  let res = 0;
  for (let i = minNum; i <= maxNum; i++) {
    res += i;
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
