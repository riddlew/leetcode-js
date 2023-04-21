import { describe, it } from "mocha";
import { assert } from "chai";
import isPangram from "./solution.js";

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.equal(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.equal(isPangram(string), false)
  });
});
