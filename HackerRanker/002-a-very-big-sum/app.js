/**
 * 
 * @param {Number[]} ar Array of numbers that are very large
 */
var aVeryBigSum = function (ar) {

    return ar.reduce((acc, number) => {
        return acc + number;
    }, 0);

}

module.exports = aVeryBigSum;
