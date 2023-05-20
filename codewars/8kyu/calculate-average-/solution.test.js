import { describe, it } from "mocha";
import { assert } from "chai";
import findAverage from "./solution.js";

describe("8kyu/calculate-average-", function() {
	describe("Basic tests", () => {
		it("Testing for fixed tests", () => {
			assert.strictEqual(findAverage([1,1,1]), 1);
			assert.strictEqual(findAverage([1,2,3]), 2);
			assert.strictEqual(findAverage([1,2,3,4]), 2.5);
		});
	});  
});