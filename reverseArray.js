function reverseArray(arr) {
  return arr.splice('').reverse().join('');
}

console.log(reverseArray([1, 2, 3, 4, 5]));
