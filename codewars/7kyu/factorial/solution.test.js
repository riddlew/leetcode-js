import { describe, it } from "mocha";
import { assert } from "chai";
import factorial from "./solution.js";

describe("Tests", () => {
  it("test", () => {
		assert.equal(factorial(0), 1, "factorial for 0 is 1");
		assert.equal(factorial(1), 1, "factorial for 1 is 1");
		assert.equal(factorial(2), 2, "factorial for 2 is 2");
		assert.equal(factorial(3), 6, "factorial for 3 is 6");
  });
});
