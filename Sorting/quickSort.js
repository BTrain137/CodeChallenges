function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const pivot = arr[~~((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quickSort(arr, index, right);
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left += 1;
    }
    while (arr[right] > pivot) {
      right -= 1;
    }

    if (left <= right) {
      swap(arr, left, right);
      left += 1;
      right -= 1;
    }
  }

  return left;
}

function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const arr = [9, 2, 6, 4, 3, 5, 1];

quickSort(arr, 0, arr.length - 1);
console.log(arr);
