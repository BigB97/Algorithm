const fs = require('fs');

const readWriteStudents = async (br) => {
  const content = fs.readFileSync('./Index.json', 'utf8');
  return content;
};

console.log(readWriteStudents());


