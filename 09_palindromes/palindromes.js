const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((x) => alphanumerical.includes(x))
    .join("");

  const len = cleanStr.length;

  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - i - 1]) return false;
  }

  return true;
};

palindromes("a!aba.a");

// Do not edit below this line
module.exports = palindromes;
