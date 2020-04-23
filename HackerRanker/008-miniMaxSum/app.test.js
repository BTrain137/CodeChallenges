const expect = require("chai").expect;
const miniMaxSum = require("./app");

//npm run mocha ./HackerRanker/008-miniMaxSum
describe("miniMaxSum", () => {
  it("1 3 5 7 9 => 16 24", () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).to.equal("16 24");
  });
  it("1 2 3 4 5 => 10 14", () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).to.equal("10 14");
  });
  it("7 69 2 221 8974 => 10 14", () => {
    expect(miniMaxSum([7, 69, 2, 221, 8974])).to.equal("299 9271");
  });
});
