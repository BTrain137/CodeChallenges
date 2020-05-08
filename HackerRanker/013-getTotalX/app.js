// https://www.hackerrank.com/challenges/between-two-sets/

const getTotalX = (a, b) => {
  let i = a[a.length -1];
  let end = b[0];
  let count = 0;
  while(i <= end) {
    const firstArr = a.every(num => i % num === 0);
    if(!firstArr) {
      i+=1;
      continue
    }
    const secondArr = b.every(num => num % i === 0);
    if(firstArr && secondArr) {
      count +=1;
    }
    i+=1;
  }

  return count;

}

console.log(getTotalX([2, 4], [16, 32, 96])); // 3

module.exports = getTotalX;
