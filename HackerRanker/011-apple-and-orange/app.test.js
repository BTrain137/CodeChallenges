const expect = require("chai").expect;
// const countApplesAndOranges = require("./app");
const countApplesAndOranges = require("./refactor");

//Point to exact folder
//npm run mocha  ./HackerRanker/011-apple-and-orange
describe("countApplesAndOranges", () => {
  it("7, 11, 5, 15, [-2, 2, 1], [5, -6] => [1, 1]", () => {
    expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).to.deep.equal([1, 1]);
  });
  it("2, 3, 1, 5, [2], [-2] => [1, 1]", () => {
    expect(countApplesAndOranges(2, 3, 1, 5, [2], [-2])).to.deep.equal([1, 1]);
  });
});
