import { describe, it } from "mocha";
import { assert } from "chai";
import findHack from "./solution.js";

describe("6kyu/find-cracker", function() {
  describe("Tests", () => {
    it("test", () => {
      var array = [
        ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
        ["name2", 120, ["B", "A", "A", "A"]],
        ["name3", 160, ["B", "A", "A", "A","A"]],
        ["name4", 140, ["B", "A", "A", "C", "A"]]
      ];

      assert.deepEqual(findHack(array),["name2","name4"]);
        });
  });
});