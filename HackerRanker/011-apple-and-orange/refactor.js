// https://www.hackerrank.com/challenges/apple-and-orange/problem
// Complete the countApplesAndOranges function below.
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {

  const fruitFallenCal = (spot, numFruitArr) => {
    return numFruitArr.reduce((acc, fruit) => {
      const fallenSpot = fruit + spot;
      return fallenSpot >= s && fallenSpot <= t ? (acc += 1) : acc;
    }, 0);
  };

  const numAppleFallen = fruitFallenCal(a, apples);
  const numOrangeFallen = fruitFallenCal(b, oranges);

  console.log(`${numAppleFallen}\n${numOrangeFallen}`);
  return [numAppleFallen, numOrangeFallen];
};

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])); // 1, 1
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-2])); // 1, 1

module.exports = countApplesAndOranges;
