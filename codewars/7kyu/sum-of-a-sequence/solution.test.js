import { describe, it } from "mocha";
import { assert } from "chai";
import sequenceSum from "./solution.js";

describe("7kyu/sum-of-a-sequence", function() {
	describe("Basic tests", () => {
		it("Testing for fixed tests", () => {
			assert.strictEqual(sequenceSum(2, 6, 2), 12)
			assert.strictEqual(sequenceSum(1, 5, 1), 15)
			assert.strictEqual(sequenceSum(1, 5, 3), 5)  
		})
	})
});