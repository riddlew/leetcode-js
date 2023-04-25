import { describe, it } from "mocha";
import { assert } from "chai";
import keepOrder from "./solution.js";

describe("Example tests", function() {
  it("Fixed cases", function() {
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 0), 0);
    assert.strictEqual(keepOrder([1, 1, 2, 2, 2], 2), 2);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4], -1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 0), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 3), 2);
    assert.strictEqual(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);
  });
});