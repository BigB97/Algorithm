function numbToMinute(num) {
  let hour = Math.floor(num / 60);
  let min = num % 60;
  return `${hour}hr : ${min}min`;
}

console.log(numbToMinute(60));
