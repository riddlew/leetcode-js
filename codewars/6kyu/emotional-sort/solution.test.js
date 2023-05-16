import { describe, it } from "mocha"
import { assert } from "chai"
import sortEmotions from "./solution.js"

describe("6kyu/emotional-sort", function() {
  describe('Basic Tests', function(){
    it('Descending', function(){
      assert.deepEqual(sortEmotions([ ':D', 'T_T', ':D', ':(' ], true), [ ':D', ':D', ':(', 'T_T' ])
      assert.deepEqual(sortEmotions([ 'T_T', ':D', ':(', ':(' ], true), [ ':D', ':(', ':(', 'T_T' ])
      assert.deepEqual(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], true), [ ':D', ':D', ':)', ':)', 'T_T' ])
    })
    it('Ascending', function(){
      assert.deepEqual(sortEmotions([ ':D', 'T_T', ':D', ':(' ], false), [ 'T_T', ':(', ':D', ':D' ])
      assert.deepEqual(sortEmotions([ 'T_T', ':D', ':(', ':(' ], false), [ 'T_T', ':(', ':(', ':D' ])
      assert.deepEqual(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], false),  [ 'T_T', ':)', ':)', ':D', ':D' ])
    })
    it('Empty array', function(){
      assert.deepEqual(sortEmotions([], false), [])
      assert.deepEqual(sortEmotions([], true), [])
    })
  });
});