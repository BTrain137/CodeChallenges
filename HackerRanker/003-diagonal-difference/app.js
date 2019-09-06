/**
 * 
 * @param  {Number} n Negative or positive number
 * @return {Number}   Number
 */

function ABS_INT(n) {
    return (n ^ (n >> 31)) - (n >> 31);
}

/**
 * 
 * @param  {Number[]} arr Array of numbers;
 * @return {Number}       Number
 */
const diagonalDifference = function(arr) {
    const firstNum = arr.map((num, index) => num[index]).reduce((acc, num) => acc + num, 0);
    const secondNum = arr.map((num, index) => num[arr.length - (index+=1)]).reduce((acc, num) => acc + num, 0);
    
    return ABS_INT(firstNum - secondNum);
}

// console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));

module.exports = diagonalDifference;

//Only works if its a straight array
// const diagonalDifference = function(arr) {
//     let firstNum = arr.filter((num, index) => index % 4 === 0).reduce((acc, num) => acc + num, 0);
//     let secondNum = arr.filter((num, index) => index % 2 === 0 && index > 1 && index < 7).reduce((acc, num) => acc + num, 0);
    
//     console.log(Math.abs(firstNum - secondNum));
//     return Math.abs(firstNum - secondNum);
// }