const persistence = require("./app");

describe('Initial Tests', function () {
    it("", () => {
        expect(persistence(39)).toEqual(4);
        expect(persistence(999)).toEqual(2);
        expect(persistence(4)).toEqual(4);
        expect(persistence(25)).toEqual(0);
  });
});