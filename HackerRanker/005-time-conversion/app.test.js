const expect = require("chai").expect;
const timeConversion = require("./app");

//npm run mocha ./HackerRanker/005-time-conversion
describe("timeConversion", () => {
  it("07:05:45PM => 19:05:45", () => {
    expect(timeConversion("07:05:45PM")).to.equal("19:05:45");
  });

  it("07:05:45AM => 07:05:45", () => {
    expect(timeConversion("07:05:45AM")).to.equal("07:05:45");
  });

  it("01:05:45PM => 13:05:45", () => {
    expect(timeConversion("01:05:45PM")).to.equal("13:05:45");
  });

  it("12:05:45PM => 12:05:45", () => {
    expect(timeConversion("12:05:45PM")).to.equal("12:05:45");
  });

  it("12:05:45AM => 00:05:45", () => {
    expect(timeConversion("12:05:45AM")).to.equal("00:05:45");
  });

});
