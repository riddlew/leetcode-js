import { assert } from "chai";
import { describe, it } from "mocha";
import printerError from "./solution.js";

describe("7kyu/printer-errors", function() {
    describe("printerError",function() {
        it("Basic tests",function() {
            var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
            assert.equal(printerError(s), "3/56")
        });
    });
});