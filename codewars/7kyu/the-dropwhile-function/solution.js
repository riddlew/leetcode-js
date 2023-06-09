export default function dropWhile(arr, pred) {
	const index = arr.findIndex(n => !pred(n));
	return index < 0 ? [] : arr.slice(index);
}