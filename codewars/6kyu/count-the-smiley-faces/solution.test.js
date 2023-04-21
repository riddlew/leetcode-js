import { describe, it } from "mocha";
import { assert } from "chai";
import countSmileys from "./solution.js";

describe("Basic testing", function() {
  it("Example tests", () => {
    assert.strictEqual(countSmileys([]                             ), 0);
    assert.strictEqual(countSmileys([':D',':~)',';~D',':)']        ), 4);
    assert.strictEqual(countSmileys([':)',':(',':D',':O',':;']     ), 2);
    assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});
