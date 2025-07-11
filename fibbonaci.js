function fibs(n) {
  // if n is less than or equal to 0 we return []
  if (n <= 0) {
    return [];
  }
  // if n is 1 we return [0]
  if (n === 1) {
    return [0];
  }
  // if n is 2 we return [0, 1]
  if (n === 2) {
    return [0, 1];
  }

  // create the array and iteratively add the sum of the
  // previous two elements
  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

function fibsRec(n) {
  // if n is 0 we return []
  if (n === 0) {
    return [];
  }
  // if n is 1 we return [0]
  if (n === 1) {
    return [0];
  }
  // if n is 2 we return [0, 1]
  if (n === 2) {
    return [0, 1];
  }

  // create the array with the first 2 elements recursively
  // then add the sum to the array
  let fibArray = fibsRec(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
}

console.log(fibs(8));
console.log(fibsRec(8));
