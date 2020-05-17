
// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
  if(n > m) {
    let res = m + (s - 1);
    return res > n ? res % n : res;
  }
  const first = n - s + 1;
  const leftOver = m - first;
  const result = leftOver % n;
  return result === 0 ? n : result; 
}

console.log(saveThePrisoner(352926151, 380324688, 94730870)); // 122129406
console.log(saveThePrisoner(7, 19, 2)); // 6
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(654809340, 204894365, 472730208)); // 22815232
