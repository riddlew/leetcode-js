import { describe, it } from "mocha";
import { assert } from "chai";
import dropWhile from "./solution.js";

describe("7kyu/the-dropwhile-function", function() {
	describe("the dropWhile function", function () {

		function isEven(num) {
			return num % 2 === 0;
		}
		
		var isEvenTests = [
		[[2,6,4,10,1,5,4,3], [1,5,4,3]],
		[[2,100,1000,10000,5,3,4,6],[5,3,4,6]],
		[[2,4,10,100,64,78,92],[]]];

		it("should be defined", function() {
			assert.deepEqual(dropWhile([], isEven), []);
		});
		
		it("should work when testing for even numbers", function() {
			isEvenTests.forEach(function (val,ind,arr) {
				assert.deepEqual(dropWhile(val[0], isEven), val[1]);
			});
		});

	});
});