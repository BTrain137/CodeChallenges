const birthdayCakeCandles = (ar, candles) => {
  let count = 0;
  let tallestCandle = 0;
  ar.sort((a, b) => a - b).reverse();

  for (let i = 0; i < ar.length; i++) {
    if (tallestCandle && tallestCandle !== ar[i]) {
      return count;
    }
    count++;
    if (!tallestCandle) tallestCandle = ar[i];
  }

  return count;
};

// console.log(birthdayCakeCandles([4, 4, 1, 3], 4));
// console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43], 10));

module.exports = birthdayCakeCandles;
