function factorial(num) {
  if (typeof num != 'number') return `Must be number`;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));
