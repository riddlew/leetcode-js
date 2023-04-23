function sumFactorial(arr){
  return arr.reduce((acc, curr) => {
    let t = 1;
    for (let i = 2; i <= curr; i++) {
      t *= i;
    }
    acc += t;
    return acc;
  }, 0);
}

export default sumFactorial;
