const expect = require("chai").expect;
const staircase = require("./app");
// const staircase = require("./refactor");

//npm run mocha ./HackerRanker/007-staircase
describe("staircase", () => {
  it("n=6", () => {
    expect(staircase(6)).to.equal(
      "     #" + "    ##" + "   ###" + "  ####" + " #####" + "######"
    );
  });
});
