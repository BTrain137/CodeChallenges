// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = function (n, ar) {
  let pairs = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        ar.splice(j,1);
        ar.splice(i,1)
        j = i;
        pairs++;
      }
    }
  }
  return pairs;
};

// console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])) //  2

module.exports = sockMerchant;
