// // https://www.hackerrank.com/challenges/service-lane/problem
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

// Complete the serviceLane function below.
function serviceLane(width, cases) {
  return cases.map((lane) => {
    const arr = [];
    for (let i = lane[0]; i <= lane[1]; i++) {
      arr.push(parseInt(width[i]));
    }
    return Math.min(...arr.map((num) => num));
  });
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nt = readLine().split(" ");

  const n = parseInt(nt[0], 10);

  const t = parseInt(nt[1], 10);

  const width = readLine()
    .split(" ")
    .map((widthTemp) => parseInt(widthTemp, 10));

  let cases = Array(t);

  for (let i = 0; i < t; i++) {
    cases[i] = readLine()
      .split(" ")
      .map((casesTemp) => parseInt(casesTemp, 10));
  }

  let result = serviceLane(width, cases);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
