
var items = [4, 5, 4, 6, 3, 4, 5, 2, 23, 1, 4, 4, 4];
// var uniqueItems = Array.from(new Set(items));

/**
 * Remove all duplicates 
 * 
 * @param  {Number[]} arr Array of numbers
 * @return {Number[]}     Array of all numbers unique
 */
const removeDuplicates = function (arr) {
    return Array.from(new Set(arr));
}

function eliminateDuplicates(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}


/**
 * Get only duplicates of 2
 * 
 * @param  {Number[]} arr Array of numbers
 * @return {Number[]}     Array of all the duplicates of 2
 */
const getOnlyDuplicates = function (arr) {

    var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
    var sortedArr = arr.slice().sort();

    var results = [];
    for (var i = 0; i < sortedArr.length - 1; i += 1) {
        if (sortedArr[i + 1] === sortedArr[i]) {
            results.push(sortedArr[i]);
        }
    }

    return results;
}

/**
 * Filters out only the numbers that occur once
 * 
 * @param  {Number[]} items Array of numbers
 * @return {Number[]}       Only the unique
 */
const onlyUniques = function (items) {

    let obj = {};
    let arr = [];

    let i;
    for (i = 0; i < items.length; i += 1) {
        obj[items[i]] = obj[items[i]] + 1 || 1;
    }

    let j = null;
    for (j in obj) {
        if (obj[j] === 1) {
            arr.push(j);
        }
    }

    return arr;

}

console.log(onlyUniques(items));
console.log(arraySet(items));