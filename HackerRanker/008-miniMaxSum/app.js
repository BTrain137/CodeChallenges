const miniMaxSum = (arr) => {
  arr.sort(function (a, b) {
    return a - b;
  });

  const add = (acc, num) => {
    return acc + num;
  };

  const largestNum = arr.pop();
  const min = arr.reduce(add, 0);
  arr.shift();
  arr.push(largestNum);
  const max = arr.reduce(add, 0);

  console.log(min,  max);
};

console.log(miniMaxSum([1, 3, 5, 7, 9])); // [16, 24]

module.exports = miniMaxSum;
