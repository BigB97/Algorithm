const https = require('https');
https
.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
    // Node.js Age Counting
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    // The whole response has been received. Print out the result.  
    resp.on('end', () => {
        let obj = JSON.parse(data);
        console.log(obj.message);
    });
    
  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
