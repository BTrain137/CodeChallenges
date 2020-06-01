const book = arr.reduce((dictionary, num) => {
  dictionary[num] = (dictionary[num] || 0) + 1;
  return dictionary;
}, {});

console.log(book);
