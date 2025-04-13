const fibonacci = function (n) {
  let nums = [0, 1];
  if (n < 0) return "OOPS";
  if (n < 2) return nums[n];

  for (let i = 2; i < n; i++) {
    nums[i % 2] += nums[(i + 1) % 2];
  }

  return nums[0] + nums[1];
};

// Do not edit below this line
module.exports = fibonacci;
