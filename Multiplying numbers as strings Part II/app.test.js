const multiply = require("./app");

describe('Some simple multiplications', function () {
    it('simple', function () { 
        expect(multiply("2", "3")).toEqual("6");
        expect(multiply("30", "69")).toEqual("2070");
        expect(multiply("11", "85")).toEqual("935");
    });
});

describe('Some corner test multiplications', function () {
    it('Negatives and decimals', function () {
        expect(multiply("-0.00", "0.0000")).toEqual("0");
        expect(multiply("-0.01", "0.0000")).toEqual("0");
        expect(multiply("2.01", "3.0000")).toEqual("6.03");
        expect(multiply("2", "-3.000001")).toEqual("-6.000002");
        expect(multiply("-5.0908", "-123.1")).toEqual("626.67748");
    });
});


describe('Some corner test multiplications', function () {
    it('numbers with a trailing 0', function () {
        expect(multiply("1", "10.0")).toEqual("10");
        expect(multiply("40", "141.625")).toEqual("5665");
    });
});