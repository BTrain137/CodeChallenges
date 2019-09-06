const isPP = require("./app");

describe("should work for some examples", function () {

    it("4 = 2^2", function () {
        expect(isPP(4)).toEqual([2, 2]);
    });

    it("5 isn't a perfect number", function () {
        expect(isPP(5)).toEqual(null);
    })

    it("9 = 3^2", function () {
        expect(isPP(9)).toEqual([3, 2]);
    });

});

describe("should work for the first perfect powers", function () {

    // let pp = [4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128, 144, 169, 196, 216, 225, 243, 256, 289, 324, 343, 361, 400, 441, 484], i;
    let pp = [4, 8], i;

    for (i = 0; i < pp.length; i += 1) {
        it("the perfect power " + pp[i] + " wasn't recognized as one", () => {
            console.log(i);
            expect(isPP(pp[i])).not.toBeNull();
        });
    }

});

// describe("should work for random perfect powers", function () {

//     var k, m, i, r, l;
//     for (i = 0; i < 100; ++i) {
//         m = 2 + (Math.random() * 0xff) | 0,
//             k = 2 + (Math.random() * Math.log(0x0fffffff) / Math.log(m)) | 0;
//         l = Math.pow(m, k);
//         r = isPP(l);
//         if (r === null) {

//             it(l + " is a perfect power", function () {
//                 expect(r !== null, l + " is a perfect power");
//             });
//             break;
//         } 
//         else if (Math.pow(r[0], r[1]) !== l) {

//             it(l + " is a perfect power", function () {
//                 Test.assertEquals(
//                     Math.pow(r[0], r[1]), l, "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l);
//                 });
//             break;
//         }
//     }

// });

// Test.it("should return valid pairs for random inputs", function () {
//     var i, r, l;

//     for (i = 0; i < 100; ++i) {
//         l = (Math.random() * 0x0000ffff) | 0;
//         r = isPP(l);
//         if (r !== null && Math.pow(r[0], r[1]) !== l) {
//             Test.assertEquals(
//                 Math.pow(r[0], r[1]), l, "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l);
//             break;
//         }
//     }
// });