import { describe, it } from "mocha";
import { assert } from "chai";
import stray from "./solution.js";

describe("7kyu/find-the-stray-number", function() {
  describe("Sample Tests", () => {
    it("Should pass Sample Tests", () => {
      assert.equal(stray([1, 1, 2]), 2);
      assert.equal(stray([1, 2, 1]), 2);
      assert.equal(stray([2, 1, 1]), 2);
    });
  });
});