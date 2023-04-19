import { describe, it } from "mocha"
import { assert } from "chai"
import ipToInt32 from "./solution.js"

describe("Tests", () => {
  it("test", () => {
    assert.equal(ipToInt32("128.32.10.1"),2149583361, "wrong integer for ip: 128.32.10.1")

  });
});
