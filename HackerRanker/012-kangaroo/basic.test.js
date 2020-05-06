const expect = require("chai").expect;
const kangaroo = require("./app");

//Point to exact folder
//npm run mocha  ./HackerRanker/012-kangaroo
describe("kangaroo", () => {
  it("0, 3, 4, 2 => YES", () => {
    expect(kangaroo(0, 3, 4, 2)).to.equal("YES");
  });

  it("0, 2, 5, 3 => NO", () => {
    expect(kangaroo(0, 2, 5, 3)).to.equal("NO");
  });

  it("43, 2, 70, 2 => NO", () => {
    expect(kangaroo(43, 2, 70, 2)).to.equal("NO");
  });
});
