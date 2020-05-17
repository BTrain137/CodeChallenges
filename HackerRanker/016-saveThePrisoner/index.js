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

// Complete the saveThePrisoner function below.
                        //  5, 2, 1
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

function main() {
  const ws = fs.createWriteStream("./result.txt");

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nms = readLine().split(" ");

    const n = parseInt(nms[0], 10);

    const m = parseInt(nms[1], 10);

    const s = parseInt(nms[2], 10);

    let result = saveThePrisoner(n, m, s);

    ws.write(result + "\n");
  }

  ws.end();
}

module.exports = saveThePrisoner;

// cat input.txt | node index.js
