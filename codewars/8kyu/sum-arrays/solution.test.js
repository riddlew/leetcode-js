import { assert } from "chai";
import { describe, it } from "mocha";
import { sum } from "./solution.js";

describe("sum-arrays", () => {
	it("returns correct sum", () => {
		assert.equal(sum([1, 5.2, 4, 0, -1]), 9.2);
	});
	it("returns 0 for empty arrays", () => {
		assert.equal(sum([]), 0);
	});
});
