function mergeSort(array) {
  // If there is only one element in the array we return the array
  if (array.length === 1) {
    return array;
  }
  // else we sort the left half of the array
  const leftHalf = array.slice(0, parseInt(array.length / 2));
  const sortedLeft = mergeSort(leftHalf);

  // sort the right half of the array
  const rightHalf = array.slice(parseInt(array.length / 2), array.length);
  const sortedRight = mergeSort(rightHalf);

  // merge the sorted arrays
  const mergedArray = [];
  let i = 0;
  let j = 0;
  // compare the elments in the two arrays and append
  // the smaller element to the merged array until one
  // half is finished
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      mergedArray.push(sortedLeft[i++]);
    } else {
      mergedArray.push(sortedRight[j++]);
    }
  }

  // add the remaining elements from whichever half has
  // elements left
  for (; i < sortedLeft.length; i++) {
    mergedArray.push(sortedLeft[i]);
  }
  for (; j < sortedRight.length; j++) {
    mergedArray.push(sortedRight[j]);
  }
  return mergedArray;
}

console.log(mergeSort([5, 2, 9, 1, 6, 3]));
