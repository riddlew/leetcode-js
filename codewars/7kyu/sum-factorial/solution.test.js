import { describe, it } from "mocha";
import { assert } from "chai";
import sumFactorial from "./solution.js";

describe("7kyu/sum-factorial", function() {
  describe("Sample tests", function() {
    it("Small tests", function() {
      assert.strictEqual(sumFactorial([4,6]), 744);
      assert.strictEqual(sumFactorial([5,4,1]), 145);
    });
  });
});