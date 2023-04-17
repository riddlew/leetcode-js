import { assert } from "chai";
import { describe, it } from "mocha";
import printerError from "./solution.js";

describe("printerError",function() {
it("Basic tests",function() {
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    assert.equal(printerError(s), "3/56")
})})