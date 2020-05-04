const expect = require("chai").expect;
const gradingStudents = require("./app");

//npm run mocha ./HackerRanker/010-gradingStudents
describe("gradingStudents", () => {
  it("3 2 => 3 6", () => {
    expect(gradingStudents([73, 67, 38, 33])).to.deep.equal([ 75, 67, 40, 33 ]);
  });
});
