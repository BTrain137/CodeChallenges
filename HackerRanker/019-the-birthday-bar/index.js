"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// $ cat input.txt | node index.js
// Complete the birthday function below.
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    let j = i
    let end = j + m
    for (; j < end; j++) {
      sum += s[j];
    }
    if (sum === d) {
      count += 1;
    }
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream("./result.txt");

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sTemp) => parseInt(sTemp, 10));

  const dm = readLine().replace(/\s+$/g, "").split(" ");

  const d = parseInt(dm[0], 10);

  const m = parseInt(dm[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + "\n");

  ws.end();
}
