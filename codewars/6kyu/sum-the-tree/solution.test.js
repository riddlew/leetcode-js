import { describe, it } from "mocha";
import { assert } from "chai";
import { sumTheTreeValues } from "./solution.js";

describe("Simple Test", function() {
  var simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};
  it("Sums up all children", function() {
    assert.equal(sumTheTreeValues(simpleNode), 13);
  });
  
  var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
  it("Handles unbalanced trees", function() {
    assert.equal(sumTheTreeValues(unbalancedNode), 12);
  });

});
