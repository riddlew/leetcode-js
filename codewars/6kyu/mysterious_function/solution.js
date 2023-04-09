const holes = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1];
export const getNum = (n) => {
  return n
    .toString()
    .split('')
    .reduce((acc, val) => acc + holes[val], 0);
}
