function keepOrder(ary, val) {
	for (let i = 0; i < ary.length; i++) {
		if (ary[i] >= val) return i;
	}
	return ary.length;
}

// better answer:
// return ary.filter(a => a < val).length;

export default keepOrder;