const expect = require("chai").expect;
const diagonalDifference = require("./app");

describe("diagonalDifference", () => {
    // 0, 4, 4;
    // 2, 2, 2;
    it(`1 2 3
       4 5 6  => 2 
       9 8 9`, () => {
        expect(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])).to.equal(2);
    });
    //0, 4, 8
    //2, 4, 6
    it(`11  2  4
        4  5  6  => 15 
       10  8 -12`, () => {
        expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).to.equal(15);
    });
});
