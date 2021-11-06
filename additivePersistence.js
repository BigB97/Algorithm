const { count } = require('console');

function AdditivePersistence(num) {
  let int = String(num);
  if (int.length == 1) return 0;
  let count = 0;
  while (int.length != 1) {
    let add = 0;
    for (let i = 0; i < int.length; i++) {
      add += parseInt(int[i]);
    }
    count++;
    if (String(add).length === 1) return `count: ${count}`;
    int = add;
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(AdditivePersistence(89437567483937438393983738));
