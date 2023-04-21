export default function isPangram(string) {
  const letters = {};
  let repeat = false;
  let str = string.replaceAll(/[^a-zA-Z]/g, '');

  str.split('').forEach(letter => {
    const l = letter.toLowerCase();
    if (letters[l]) {
      letters[l] += 1;
      repeat = true;
    }

    letters[l] = 1;
  });

  return Object.keys(letters).length === 26;
}

// I like this solution more:
//
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }
