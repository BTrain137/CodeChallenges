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
// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  const birds = arr.reduce((dictionary, num) => {
    dictionary[num] = (dictionary[num] || 0) + 1;
    return dictionary;
  }, {});

  let highestKey = 0;
  let highestValue = 0;
  for (const key in birds) {
    if ( birds[key] > highestValue) {
      highestKey = key;
      highestValue = birds[key];
    }
  }

  return highest;
}

function main() {
  const ws = fs.createWriteStream("./result.txt");

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
