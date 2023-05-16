export default function findHack(arr) {
  const grades = { "A": 30, "B": 20, "C": 10, "D": 5}
  const cheaters = [];

  arr.forEach(person => {
    let bonus = true;

    const total = person[2].reduce((acc2, score, i) => {
      const grade = grades[score] || 0;
      acc2 += grade;
      if (grade < 20) bonus = false;
      if (i == 4 && bonus) acc2 += 20
      return acc2;
    }, 0)

    if (person[1] !== total) cheaters.push(person[0]);
  });

  return cheaters;
}