import { describe, it } from "mocha";
import { assert } from "chai";
import makeSentence from "./solution.js";

describe("Tests", () => {
  it("test", () => {
		assert.equal(makeSentence(['hello', 'world']), 'hello world.')
  });
});