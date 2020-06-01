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
    console.log(i, sum);
  }

  return count;
}

// console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([4], 4, 1));

