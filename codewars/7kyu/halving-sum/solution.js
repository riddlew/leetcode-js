function halvingSum(n) {
  const rounded = Math.floor(n);
  return rounded < 1 ? 0 : rounded + halvingSum(rounded/2);
}

export default halvingSum;