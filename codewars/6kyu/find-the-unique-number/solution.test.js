import { describe, it } from "mocha"
import { assert } from "chai"
import findUniq from "./solution.js"

describe("Example Tests", () => {
  it("Tests", () => {
    assert.equal(findUniq([ 1, 0, 0 ]), 1);
    assert.equal(findUniq([ 0, 1, 0 ]), 1);
    assert.equal(findUniq([ 0, 0, 1 ]), 1);
    assert.equal(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.equal(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    assert.equal(findUniq([ 3, 10, 3, 3, 3 ]), 10);
  });
});