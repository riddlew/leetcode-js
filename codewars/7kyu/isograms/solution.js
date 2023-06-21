export default function isIsogram(str) {
	const letters = {};

	for(const l of str) {
		const key = l.toLowerCase();
		letters[key] = letters[key] ? letters[key] + 1 : 1;
		if (letters[key] > 1) return false;
	}

	return true;
}