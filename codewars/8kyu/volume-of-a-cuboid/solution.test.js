import { describe, it } from 'mocha';
import { assert } from 'chai';
import Kata from './solution.js';

describe("8kyu/volume-of-a-cuboid", function() {
  describe("Tests", () => {
    it("Example tests", () => {
      assert.equal(Kata.getVolumeOfCuboid(1,2,2),  4);
      assert.equal(Kata.getVolumeOfCuboid(6,2,5), 60);
    });
  });
});