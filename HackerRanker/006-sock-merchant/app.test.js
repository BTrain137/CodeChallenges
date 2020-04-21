const expect = require("chai").expect;
// const sockMerchant = require("./app");
const sockMerchant = require("./refactor");

//npm run mocha ./HackerRanker/006-sock-merchant
describe("sockMerchant", () => {
  it("n=7 [1, 2, 1, 2, 1, 3, 2]", () => {
    expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).to.equal(2);
  });

  it("n=9 [10, 20, 20, 10, 10, 30, 50, 10, 20]", () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.equal(3);
  });
});
