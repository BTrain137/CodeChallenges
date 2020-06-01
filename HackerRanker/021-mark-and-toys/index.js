"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// cat input.txt | node index.js
// Complete the maximumToys function below.
// 1 12 5 111 200 1000 10
function maximumToys(prices, k) {
  let length = prices.length;
  let total = 0;
  let count = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (prices[j] < prices[j + 1]) {
        let temp = prices[j + 1];
        prices[j + 1] = prices[j];
        prices[j] = temp;
      }
    }
    total += prices[length - 1 - i];
    if (total <= k) {
      count += 1;
    }
    else {
      return count;
    }
  }

  return prices;
}

function main() {
  const ws = fs.createWriteStream("./result.txt");

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const prices = readLine()
    .split(" ")
    .map((pricesTemp) => parseInt(pricesTemp, 10));

  let result = maximumToys(prices, k);

  ws.write(result + "\n");

  ws.end();
}
