const fs = require('fs');

let stream = fs.createReadStream('public/lorem.txt', 'UTF-8');

stream.once('data', () => {
  console.log('Start stream reading');
});

stream.on('data', (chunk) => {
  process.stdout.write(`chunck : ${chunk.length}`);
});

stream.on('end', () => {
  console.log('End stream reading');
});