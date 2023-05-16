import { describe, it } from "mocha";
import { assert } from "chai";
import updateLight from "./solution.js";

describe("8kyu/thinkful---logic-drills:-traffic-light", function() {
  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(updateLight("green"), "yellow");
      assert.strictEqual(updateLight("yellow"), "red");
      assert.strictEqual(updateLight("red"), "green");
    });
  });
});