function fibs(n) {
  // if n is 1 we return [0]
  if (n === 1) {
    return [0];
  }
  // if n is 2 we return [0, 1]
  if (n === 2) {
    return [0, 1];
  }

  // set the previous and next numbers and their sum
  // then append it to the array & update all 3 variables
  // with the new values
  let first = 0;
  let next = 1;
  let sum = first + next;
  let array = [first, next];
  for (let i = 0; i < n - 2; i++) {
    array.push(sum);
    first = next;
    next = sum;
    sum = first + next;
  }
  return array;
}

console.log(fibs(8));
console.log(fibs(6));
