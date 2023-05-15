export default function makeSentence(parts) {
	return parts
		.join(' ')
		.replaceAll(/\s,\s/g, ', ')
		.replace(/[\s.]*$/, '.');
}