const timeConversion = function(s) {
  const [hours, minutes, secWithMeridiem] = s.split(":");
  const seconds = secWithMeridiem.slice(0, 2);
  const meridiem = secWithMeridiem.slice(2);
  const hoursMod = hours % 12;
  const parseHr = meridiem === "PM" ? hoursMod + 12 : `0${hoursMod}`;
  return `${parseHr}:${minutes}:${seconds}`;
};

module.exports = timeConversion;
