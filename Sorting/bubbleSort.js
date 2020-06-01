function bubbleSortDesc(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSortDesc([1, 12, 5, 111, 200, 1000, 10]));

function bubbleSortAsc(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSortAsc([1, 12, 5, 111, 200, 1000, 10]));
