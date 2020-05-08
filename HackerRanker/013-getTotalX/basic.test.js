const expect = require("chai").expect;
const getTotalX = require("./app");

//Point to exact folder
//npm run mocha  ./HackerRanker/013-getTotalX
describe("getTotalX", () => {
  it("[2, 4], [16, 32, 96] => 3", () => {
    expect(getTotalX([2, 4], [16, 32, 96])).to.equal(3);
  });
});
