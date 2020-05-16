// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  return ar.reduce((acc, num, index, arr) => {
    console.log({ acc, num, index });
    for (let i = index + 1; i < arr.length; i += 1) {
      console.log(`${num} + ${arr[i]}) % ${k} === ${num + arr[i]}`);
      if ((num + arr[i]) % k === 0) {
        console.log(true);
        acc += 1;
      }
    }

    return acc;
  }, 0);
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // 5
