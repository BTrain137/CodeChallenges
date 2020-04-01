// https://www.hackerrank.com/challenges/time-conversion/problem

const timeConversion = function(s) {
  const hms = s.split(":");
  const meridiem = hms[2].slice(2);
  const minute = hms[1];
  const second = hms[2].slice(0, 2);
  const parseHr =
    meridiem === "PM" ? parseInt(hms[0] % 12) + 12 : `0${hms[0] % 12}`;
  return `${parseHr}:${minute}:${second}`;
};

console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("07:05:45AM")); // 07:05:45
console.log(timeConversion("01:05:45PM")); // 13:05:45

console.log(timeConversion("12:05:45PM")); // 12:05:45
console.log(timeConversion("12:05:45AM")); // 00:05:45

module.exports = timeConversion;
