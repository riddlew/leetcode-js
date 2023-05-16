import { describe, it } from "mocha"
import { assert } from "chai"
import { maximizePoints } from "./solution.js"

describe("6kyu/maximize-points", function() {
  describe("Basic Tests", function(){ 
    it("It should works for basic tests.", function(){
      assert.equal(maximizePoints([3, 2, 4], [1, 2, 3]),3)
      assert.equal(maximizePoints([1],[99]),0)
      assert.equal(maximizePoints([99],[1]),1)
      assert.equal(maximizePoints([25, 7, 26, 48],[1, 36, 5, 33]),3)
      assert.equal(maximizePoints([7, 19, 23, 18, 38, 37, 38, 40],[21, 12, 1, 0, 13, 38, 25, 49]),7)
    });
  });
});