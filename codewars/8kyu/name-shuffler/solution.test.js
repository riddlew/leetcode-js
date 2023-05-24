import { describe, it } from "mocha";
import { assert } from "chai";
import nameShuffler from "./solution.js";

describe("8kyu/name-shuffler", function() {
	describe("Tests", () => {
		it("test", () => {
			assert.strictEqual(nameShuffler('john McClane'),'McClane john');
			assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
			assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
		});
	});
});
