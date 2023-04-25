import { describe, it } from "mocha";
import { assert } from "chai";
import chain from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    function add(x) {
    	return x + 10;
    }

    function mult(x) {
    	return x * 30;
    }

    assert.equal(chain(2, [add, mult]), 360, "Error: chain function does not work");
  });
});