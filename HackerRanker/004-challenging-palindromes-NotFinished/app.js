"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the buildPalindrome function below.
 */

// b a c

// b a c

// pb
// kkb
function buildPalindrome(a, b) {

    let aCounter = 0;
    let longestPal = "";

    while (true) {
        let bCounter = b.length - 1;
        let currentPal = "";
        let subStringA = "";
        let subStringB = "";
        
        while(true) {
            
            if(a[aCounter] === b[bCounter]) {
                console.log("a[aCounter] === b[bCounter]", a[aCounter], b[bCounter])
                subStringA = subStringA + a[aCounter];
                subStringB = b[bCounter] + subStringB;
                currentPal = subStringA + subStringB;
                bCounter -= 1;
            }
            else if (currentPal.length >= 2) {

                if (b[bCounter + 1] === a[aCounter] && b[bCounter]) {
                    console.log("b[bCounter + 1] === a[aCounter] && b[bCounter]", b[bCounter + 1], a[aCounter], b[bCounter]);
                    subStringB = b[bCounter] + subStringB;
                    currentPal = subStringA + subStringB;
                    bCounter -= 1;
                }
                else if (a[aCounter + 1] === b[bCounter + 1]) {
                    console.log("a[aCounter + 1] === b[bCounter + 1]", a[aCounter + 1], b[bCounter + 1]);
                    aCounter += 1;
                    subStringA = subStringA + a[aCounter];
                    currentPal = subStringA + subStringB;
                }
            }
            else {
                bCounter -= 1;
                console.log("else", "aCounter", aCounter, "bCounter", bCounter);
            }

            if(bCounter === 0) {
                longestPal = currentPal;
                aCounter += 1;
                break;
            }

        }

        if(aCounter === a.length - 1) {
            if(longestPal) {
                return longestPal;
            }
            else {
                return -1;
            }
        }

    }

}

console.log(buildPalindrome("bac", "bac"));
// console.log(buildPalindrome("abcdje", "zyejdc")); //cdjeyejdc
// console.log(buildPalindrome(
    // 'qquhuwqhdswxxrxuzzfhkplwunfagppcoildagktgdarveusjuqfistulgbglwmfgzrnyxryetwzhlnfewczmnoozlqatugmd',
    // 'jwgzcfabbkoxyjxkatjmpprswkdkobdagwdwxsufeesrvncbszcepigpbzuzoootorzfskcwbqorvw')); //oozlzoo //zrotorz

module.exports = buildPalindrome;

/**
    let pal = "";
    let aFirst = 0;
    let aDistance = 1;
    let longestPal = "";

    while (true) {
        let bFirst = 0;
        let bDistance = 1;


        let firstString = a.slice(aFirst, aFirst + aDistance);

        while (true) {

            let secondString = b.slice(bFirst, bFirst + bDistance);
            let string = firstString + secondString;

            let pal = string.split("").reverse("").join("");

            if (pal.length > 2 && pal === string) {
                console.log(pal);
                if(string.length > longestPal.length) {
                    longestPal = string;
                    break;
                }
            }

            if(bFirst + bDistance === b.length) {
                bFirst = 0;
                bDistance += 1;
                continue
            }

            if(bFirst + bDistance > b.length) {
                break;
            }

            bFirst+=1;
        }

        if(aFirst + aDistance === a.length) {
            aFirst = 0;
            aDistance += 1;
            continue
        }

        if(aFirst + aDistance > a.length) {
            if(longestPal.length) {
                return longestPal;
            }
            return -1;
        }

        aFirst+=1;

    }
 */

/**

    let pal = "";
    let aFirst = 0;
    let aLast = 1;

    while (true) {
        let bFirst = 0;
        let bLast = 2;

        let inside = true;

        let firstString = a.slice(aFirst, aLast);

        while (inside) {
            let secondString = b.slice(bFirst, bLast);
            let string = firstString + secondString;

            let pal = string.split("").reverse("").join("");

            if (pal === string) {
                return string;
            }

            if (bLast === b.length) {
                inside = false;
                break;
            }

            bFirst += 1;
            bLast += 1;
        }

        aFirst+=1
        aLast+=1;

    }
 */

/**
while (true) {
    let string = a[index1] + b[index2] + b[index2 + 1]; 

    let pal = string.split("").reverse("").join("");

    if (pal === string) {
      return string;
    }

    index2 += 1;
    if (index2 + 1 === b.length - 1) {
      index1 += 1;
      index2 = 0;
    }
  }
  */

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const a = readLine();

    const b = readLine();

    let result = buildPalindrome(a, b);

    ws.write(result + "\n");
  }

  ws.end();
}
