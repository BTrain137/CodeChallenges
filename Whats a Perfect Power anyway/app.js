/**
 * Find all prime factors of a number and return in array
 * 
 * @param  {Number}   num  Number that prime factors need to be found
 * @return {Number[]}      Array of all the multiples
 */
const isPP = function(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else {
            divisor+=1;
        }
    }

    let obj = {};

    if(factors.length === 1) {
        return null;
    }

    let i;
    for (i = 0; i < factors.length; i += 1) {
        obj[factors[i]] = obj[factors[i]] + 1 || 1;
    }

    if(Object.keys(obj).length === 1) {
        let value = null;
        for(value in obj) {
            return [+value, obj[value]]
        }
    }
    else {
        return null;
    }

}

// console.log(isPP(4)) // [2, 2]
// console.log(isPP(9)) // [3, 2]
// console.log(isPP(5)) // null
// console.log(isPP(36)) // null
console.log(isPP(100)) // null
module.exports = isPP;