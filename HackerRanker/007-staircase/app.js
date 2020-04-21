// Complete the staircase function below.
const staircase = (n) => {
  const space = " ";
  const hash = "#";
  let stairCase = "";
  for (let i = 1; i < n + 1; i++) {
    stairCase += `${space.repeat(n - i)}${hash.repeat(i)} ${i < n ? "\n" : ""}`;
  }
  return stairCase;
};

console.log(staircase(6)); // "     #" + "    ##" + "   ###" + "  ####" + " #####" + "######"
// console.log(staircase(4)); // "   #" + "  ##" + " ###" + "####" +

module.exports = staircase;
