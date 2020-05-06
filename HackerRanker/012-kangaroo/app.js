// https://www.hackerrank.com/challenges/kangaroo/problem
const kangaroo = (x1, v1, x2, v2) => {
  if(v2 >= v1) return "NO";

  let kOnePosition = x1;
  let kTwoPosition = x2;
  while(true) {
    kOnePosition += v1;
    kTwoPosition += v2;
    if(kOnePosition === kTwoPosition ) {
      return "YES";
    }
    if(kOnePosition > kTwoPosition) {
      return "NO";
    }
  }
};

console.log(kangaroo(0, 3, 4, 2)); // YES

module.exports = kangaroo;
