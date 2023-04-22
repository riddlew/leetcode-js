import { assert } from "chai";
import { describe, it } from "mocha";
import validateHello from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    assert.equal(validateHello('ahoj'), true);
    assert.equal(validateHello('meh'), false);
  });
});
