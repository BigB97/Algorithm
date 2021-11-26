// Mean: Addition of all array/ Divided by the length
const mean = (arr) => arr.reduce((a, b) => a + b) / arr.length;
const mode = (arr) => {
  let obj = {};
  let count = 0;
  for (const key of arr) !obj[key] ? (obj[key] = 1) : obj[key]++;
  for (const key in obj) {
    if (obj[key] > count) count = obj[key];
  }
  return count;
};
const MeanMode = (arr) => (mean(arr) == mode(arr) ? 1 : 0);
console.log(MeanMode([5, 3, 3, 3, 1]));
