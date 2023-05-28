export default function sequenceSum(begin, end, step) {
	let sum = 0;
	for (let i = begin; i <= (begin > end ? 0 : end); i += step) {
		sum += i;
	}
	return sum;
}