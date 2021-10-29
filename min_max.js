function minMax(str) {
  var obj = {};

  for (let key of str) {
    !obj[key] ? (obj[key] = 1) : obj[key]++;
  }

  let maxNumber = 0;
  let maxCharac = '';
  for (const key in obj) {
    if (obj[key] >= maxNumber) maxNumber = obj[key];
    maxCharac = key;
  }
  console.log(`maxNumber:${maxNumber}, maxCharac:${maxCharac}`);
  console.log(maxCharac);
}

minMax('jerry');
