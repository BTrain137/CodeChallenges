const kprimesStep = require("./app");

function testing(k, step, start, nd, expected) {
    console.log(+k + " " + +step + " " + +start + " " + +nd + "\n")
    let ans = kprimesStep(k, step, start, nd);
    expect(ans).toEqual(expected);
}

describe("kprimesStep", function () {

    it("Basic Test", function() {
        testing(2, 2, 0, 50, [[4, 6], [33, 35]])
        testing(5, 20, 0, 50, [])
        testing(10, 8, 2425364, 2425700, []);
        testing(5, 6, 259573, 260054, [[259590, 259596], [259596, 259602], [259666, 259672], [259710, 259716], [259716, 259722], [259830, 259836], [259836, 259842], [259929, 259935], [259938, 259944], [259944, 259950]]);
    });
    
    it("Advance Test", function () {
        testing(2, 10, 0, 50, [[4, 14], [15, 25], [25, 35], [39, 49]])
        testing(6, 8, 2627371, 2627581, [[2627408, 2627416], [2627440, 2627448], [2627496, 2627504]]);
    });
});