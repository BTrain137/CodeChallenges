const expect = require("chai").expect;
const birthdayCakeCandles = require("./app");

//npm run mocha ./HackerRanker/009-birthdayCakeCandles
describe("birthdayCakeCandles", () => {
  it("4, 4, 1, 3 => 2", () => {
    expect(birthdayCakeCandles([4, 4, 1, 3], 4)).to.equal(2);
  });
  it("3, 2, 1, 3 => 2", () => {
    expect(birthdayCakeCandles([3, 2, 1, 3], 4)).to.equal(2);
  });
  it("10 - 18, 90, 90, 13, 90, 75, 90, 8, 90, 43 => 5", () => {
    expect(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43], 10)).to.equal(5);
  });
});

