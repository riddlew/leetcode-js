import { assert } from "chai";
import { describe, it } from "mocha";
import sixToast from "./solution.js";

describe("8kyu/maxing-six-toast", function() {
  describe("Tests", () => {
    it("test", () => {
      assert.equal(sixToast(6), 0);
      assert.equal(sixToast(17), 11);
      assert.equal(sixToast(3), 3);
    });
  });
});