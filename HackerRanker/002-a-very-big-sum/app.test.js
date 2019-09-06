const expect = require("chai").expect;
const veryBigSum = require("./app");

describe("veryBigSum", function () {
    it("1000000001 1000000002 1000000003 1000000004 1000000005", function () {
        expect(veryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).to.equal(5000000015);
    });
});