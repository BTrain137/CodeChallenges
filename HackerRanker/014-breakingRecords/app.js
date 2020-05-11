// https://www.hackerrank.com/challenges/breaking-best-and-worst-records
const breakingRecords = (scores) => {
  let highestScore = scores[0],
  lowestScore = scores[0],
  highestRecords = 0,
  lowestRecords = 0;

  for (let i = 1; i < scores.length; i++) {
    if(highestScore > scores[i]) {
      highestScore = scores[i];
      highestRecords+=1;
    }
    else if (lowestScore < scores[i]) {
      lowestScore = scores[i];
      lowestRecords+=1;
    }
  }

  return [lowestRecords, highestRecords];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // 2 4

module.exports = breakingRecords;
