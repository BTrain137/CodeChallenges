/**
 * Merge 2 sorted array while returning them still sorted;
 *
 * @param  {Number[]} arr1 Array number 1 of numbers
 * @param  {Number[]} arr2 Array number 2 of numbers
 */

var mergeSortedArrays = function(arr1, arr2) {
    let combinedArrays = [];
    let i = 0;
    let j = 0;
    for (i; i < arr1.length; i += 1) {
        for (j; j < arr2.length; j += 1) {
            if (arr1[i] > arr2[j]) {
                combinedArrays.push(arr2[j]);
            } else {
                combinedArrays.push(arr1[i]);
                break;
            }
        }
    }

    return combinedArrays;
};

var mergeSortedArrays2 = function(arr1, arr2) {
    const combinedArrays = [];
    let i = 0;
    arr1.forEach(function(number) {
        for (i; i < arr2.length; i += 1) {
            if (number > arr2[i]) {
                combinedArrays.push(arr2[i]);
            } else {
                combinedArrays.push(number);
                break;
            }
        }
    });

    return combinedArrays;
};

var mergeSortedArrays3 = function(arr1, arr2) {
    const mergeArray = [];
    let i = 0,
        j = 0;
    let array1Item = arr1[i];
    let array2Item = arr2[j];

    while (arr1[i] || arr2[j]) {
        if (arr2[j] === undefined || arr1[i] < arr2[j]) {
            mergeArray.push(arr1[i]);
            i += 1;
        } else {
            mergeArray.push(arr2[j]);
            j += 1;
        }
    }

    return mergeArray;
};

var mergeSortedArrays4 = function(arr1, arr2) {
    const mergeArray = [];
    let i = 0,
        j = 0;
    let array1Item = arr1[i];
    let array2Item = arr2[j];

    while (array1Item || array2Item) {
        if (array1Item > array2Item) {
            mergeArray.push(array2Item);
            j += 1;
            // if
        } else {
            mergeArray.push(arr1[i]);
            i += 1;
        }
    }

    return mergeArray;
};

function realMergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays3([0,3,4,31], [3,4,6,30]));
// console.log(mergeSortedArrays3([3, 4, 6, 30], [0, 3, 4, 31]));
