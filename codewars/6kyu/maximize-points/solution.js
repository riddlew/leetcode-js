export const maximizePoints = (team1, team2) => {
	team1.sort((a, b) => a - b);
	team2.sort((a, b) => a - b);
  let total = 0;
  
	for (let i = 0, j = 0; i < team1.length; i++) {
    if (team1[i] > team2[j]) {
      total++;
      j++;
    }
  }
  
  return total;
};
