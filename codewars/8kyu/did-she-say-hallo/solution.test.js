import { assert } from "chai";
import { describe, it } from "mocha";
import validateHello from "./solution.js";

describe("8kyu/did-she-say-hallo", function() {
  describe("Tests", () => {
    it("test", () => {
      assert.equal(validateHello('ahoj'), true);
      assert.equal(validateHello('meh'), false);
    });
  });
});