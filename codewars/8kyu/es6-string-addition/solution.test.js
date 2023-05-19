import { describe, it } from "mocha";
import { assert } from "chai";
import joinStrings from "./solution.js";

describe("8kyu/es6-string-addition", function() {
	describe("add", () => {
		it("should work for sample tests", () => {
			assert.strictEqual(joinStrings('string1', 'string2'), 'string1 string2');
			assert.strictEqual(joinStrings('testing', 'testing'), 'testing testing');
			assert.strictEqual(joinStrings(134, 234), '134 234');
		});
	});
});