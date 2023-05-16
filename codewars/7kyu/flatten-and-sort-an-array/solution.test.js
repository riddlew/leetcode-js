import { describe, it } from "mocha";
import { assert } from "chai";
import flattenAndSort from "./solution.js";

describe("7kyu/flatten-and-sort-an-array", function() {
  describe("Example test cases", function() {
    it("Should pass example tests", function() {
      assert.deepEqual(flattenAndSort([]), []);
      assert.deepEqual(flattenAndSort([[], []]), []);
      assert.deepEqual(flattenAndSort([[], [1]]), [1]);
      assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
    });
  });
});