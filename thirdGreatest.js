function thirdGreatest(strArr) {
  const resp = strArr.sort((a, b) => b.length - a.length);
  return resp[2];
}

console.log(thirdGreatest([23, 65, 88, 12, 45, 99, 2000]));
