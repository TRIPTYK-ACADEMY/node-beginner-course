const fs = require('fs');

// Synchrone

console.log('--- Synchronous native mode');

const list = fs.readdirSync('./');
console.log(list);
console.log('Directory read synchronously');

// Asynchrone

console.log('--- Asynchronous native mode');

fs.readdir('./', (error, files) => {
  console.log(files);
});

console.log('Directory read asynchronously');
