function findUniq(arr) {
	// My solution: count the occurences and find the one that occurs once.
	let occ = {};
	arr.forEach(v => occ[v] ? occ[v] += 1 : occ[v] = 1);
	let [a, b] = Object.keys(occ);
	return occ[a] == 1 ? +a : +b;

	// Top solution: sort, if first == second, return last number, otherwise return first.
	// arr.sort((a, b) => a - b);
	// return arr[0] == arr[1] ? arr.pop() : arr[0];
}

export default findUniq;