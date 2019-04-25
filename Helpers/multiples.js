//http://tutorial.math.lamar.edu/Classes/Alg/Factoring.aspx
/**
 * Find all prime factors of a number and return in array
 * 
 * @param  {Number}   num  Number that prime factors need to be found
 * @return {Number[]}      Array of all the multiples
 */
const primeFactors = function (integer) {

    //integer is the value for which we are finding prime factors
    let primeArray = [],
        isPrime,
        i;

    //find divisors starting with 2
    for (i = 2; i <= integer; i++) {
        if (integer % i == 0) {

            //check if divisor is prime
            for (var j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    isPrime = false;
                } else {
                    isPrime = true;
                }
            }

            //if the divisor is prime

            if (isPrime == true) {
                //divide integer by prime factor & factor store in array primeArray
                integer /= i
                primeArray.push(i);
            }
        }
    }

    return primeArray;

    // for (var k = 0; k < primeArray.length; k++) {
    //     console.log(primeArray[k]);
    // }

}

function primeFactors2(n) {
    var factors = [],
        divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else {
            divisor+=1;
        }
    }
    return factors;
}

console.log(primeFactors2(13195));