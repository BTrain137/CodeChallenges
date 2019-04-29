/**
 * Find all the prime factors of a number
 * 
 * @param  {Number}   num  Number that multiples need to be found
 * @return {Number[]}      Array of all the multiples
 */
const primeFactors = function (num) {
    var factors = [],
        divisor = 2;

    while (num >= 2) {
        if (num % divisor == 0) {
            factors.push(divisor);
            num /= divisor;
        }
        else {
            divisor += 1;
        }
    }
    return factors;
}

/**
 * Find a number called k-prime. K-prime is exactly the 
 * k-`factorails` multiply Example of 3-prime is 12=[2,2,3].
 * 
 * Find the k-prime between the start and end. 
 * Return only the k-prime's difference is step amount
 * @param  {Number}  k     Type of k-primes 
 * @param  {Number}  step  Step between two k-primes
 * @param  {Number}  start Start of search
 * @param  {Number}  nd    End of search
 * @return {Number[]}      Pair of arrays
 */
const kprimesStep = function (k, step, start, nd) {

    let i;
    let firstArr = [];
    let secondarr = [];

    for (i = start; i <= (nd - step); i += 1) {
        if (primeFactors(i).length === k) {
            firstArr.push(i);
        }
    }
    // console.log(firstArr);
    let j;
    for(j = 0; j < secondarr.length; j+=1) {
        if(secondarr[j+step] - secondarr[j] === step) {
            console.log([secondarr[j], secondarr[j+step]])
        }
    }

    return secondarr;
}

// console.log(kprimesStep(2, 2, 0, 50)); //[[4, 6], [33, 35]] 
console.log(kprimesStep(5, 6, 259573, 260054)); //[[4, 6], [33, 35]] 
module.exports = kprimesStep;

/**
  Why did my code time out?
  Our servers are configured to only allow a certain amount of time for your code to execute. In rare cases the server may be taking on too much work and simply wasn't able to run your code efficiently enough. Most of the time though this issue is caused by inefficient algorithms. If you see this error multiple times you should try to optimize your code further.
 */

/**
const kprimesStep = function (k, step, start, nd) {

    let i;
    let arr = [];

    for (i = start; i <= (nd - step); i += 1) {
        if (primeFactors(i).length === k) {
            let nextNum = i + step;
            if(primeFactors(nextNum).length === k) {
                arr.push([i, nextNum]);
            }
        }
    }
    return arr;
}
 */