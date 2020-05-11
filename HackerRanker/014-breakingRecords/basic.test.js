const expect = require("chai").expect;
const breakingRecords = require("./app");

//Point to exact folder
//npm run mocha ./HackerRanker/014-breakingRecords
describe("breakingRecords", () => {
  it("[10, 5, 20, 20, 4, 5, 2, 25, 1] => [2, 4]", () => {
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).to.deep.equal([2, 4]);
  });

  it("[3, 4, 21, 36, 10, 28, 35, 5, 24, 42] => [4, 0]", () => {
    expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).to.deep.equal([4, 0]);
  });
});
