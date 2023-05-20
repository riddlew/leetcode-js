export default function findAverage(array) {
	return array.length ? array.reduce((acc, val) => acc + val, 0) / array.length : 0;
}