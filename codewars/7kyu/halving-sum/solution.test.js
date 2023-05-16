import { describe, it } from "mocha";
import { assert } from "chai";
import halvingSum from "./solution.js";

describe("7kyu/halving-sum", function() {
  describe("Test Case", function() {
    it("Test", function() {
      assert.equal(halvingSum(25),47);
      assert.equal(halvingSum(127),247);
    });
  });
});