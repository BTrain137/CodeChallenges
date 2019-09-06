/**
 * $ npm run mocha ./HackerRanker/001-compare-the-triplets/
 */
const expect = require("chai").expect;
const compareTheTriplets = require("./app");

describe("compareTheTriplets", function () {
    it("[5, 6, 7], [3, 6, 10] => [1, 1]", function () {
        expect(compareTheTriplets([5, 6, 7], [3, 6, 10])).to.deep.equal([1, 1]);
    });
    it("[17, 28, 30], [99, 16, 8] => [2, 1]", function () {
        expect(compareTheTriplets([17, 28, 30], [99, 16, 8])).to.deep.equal([2, 1]);
    });
});


// describe("returnsSameThing with expect", function () {
//     it("Example Test #1", function () {
//         expect(compareTheTriplets("hello")).to.equal("hello");
//     });
//     it("Example Test #2", function () {
//         expect(compareTheTriplets("hello")).to.equal("hello");
//     });
// });
