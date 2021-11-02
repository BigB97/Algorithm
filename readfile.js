const fs = require('fs');

// fs.readFile('/index.json', function (err, data) {
//   if (err) return err;
//   console.log(data);
// });

const students = async (br) => {
  const content = fs.readFileSync('./Index.json', 'utf8');
  return content;
  //   return data;
};

console.log(students());

// async function name(params) {
//   const res = await students();
//   console.log(res);
// }

// name();
