export default function factorial(n) {
	if (n < 0 || n > 12) throw new RangeError();
	return n < 2 ? 1 : n * factorial(n-1);

	// or

	// if (n < 2) return 1;
	// let total = n;
	// while (n >= 0) {
	// 	total *= n < 2 ? 1 : n - 1;
	// 	n--;
	// }
	// return total;
}