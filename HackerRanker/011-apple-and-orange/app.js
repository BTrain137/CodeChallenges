// https://www.hackerrank.com/challenges/apple-and-orange/problem
// Complete the countApplesAndOranges function below.
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const fallenApple = apples.reduce((acc, apple) => {
    const fallenSpot = apple + a;
    if (fallenSpot >= s && fallenSpot <= t) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  const fallenOranges = oranges.reduce((acc, oranges) => {
    const fallenSpot = oranges + b;
    if (fallenSpot >= s && fallenSpot <= t) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  console.log(`${fallenApple}\n${fallenOranges}`);
  return [fallenApple, fallenOranges];
};

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])); // 1, 1
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-2])); // 1, 1

module.exports = countApplesAndOranges;
