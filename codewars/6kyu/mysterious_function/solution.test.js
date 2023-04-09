import { assert } from 'chai';
import { it, describe } from 'mocha';
import { getNum } from './solution.js';

describe("Tests", () => {
  it("test", () => {
    assert.equal(getNum(300), 2);
    assert.equal(getNum(90783), 4);
    assert.equal(getNum(123321), 0);
    assert.equal(getNum(89282350306), 8);
    assert.equal(getNum(3479283469), 5);
  });
});
