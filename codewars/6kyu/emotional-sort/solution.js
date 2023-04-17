function sortEmotions(arr, order){
  if (arr.length === 0) return arr;
  const score = [':D', ':)', ':|', ':(', 'T_T'];

  return order
    ? arr.sort((a, b) => score.indexOf(a) - score.indexOf(b))
    : arr.sort((a, b) => score.indexOf(b) - score.indexOf(a));
}

export default sortEmotions;