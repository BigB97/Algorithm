const fs = require('fs');

const readWriteStudents = async (br) => {
  const content = fs.readFileSync('./Index.json', 'utf8');
  const write = fs.writeFileSync('write.json', content);
  return;
};

console.log(readWriteStudents());
