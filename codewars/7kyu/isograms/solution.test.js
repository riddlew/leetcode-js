import { describe, it } from "mocha";
import { assert } from "chai";
import isIsogram from "./solution.js";

describe("7kyu/isograms", function() {
	describe("Tests", () => {
		it("test", () => {
			assert.strictEqual(isIsogram("Dermatoglyphics"), true );
			assert.strictEqual(isIsogram("isogram"), true );
			assert.strictEqual(isIsogram("aba"), false, "same chars may not be adjacent" );
			assert.strictEqual(isIsogram("moOse"), false, "same chars may not be same case" );
			assert.strictEqual(isIsogram("isIsogram"), false );
			assert.strictEqual(isIsogram(""), true, "an empty string is a valid isogram" );
		});
	});
});