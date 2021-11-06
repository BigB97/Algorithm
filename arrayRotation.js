function ArrayRotation(arr) {
  if (arr[0] > arr.length) return `Array Index is bigger than Array length`;
  let startIndex = arr[0];
  for (let i = 0; i < startIndex; i++) {
    arr.push(arr[i]);
  }
  return arr.slice(startIndex).join('');
}

// KEEP THIS FUNCTION CALL HERE
console.log(ArrayRotation([1, 3, 4, 3, 1, 2, 7, 7, 8, 8, 9, 9, 9]));
